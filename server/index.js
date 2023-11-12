const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

const multer = require("multer");
const upload = multer({ dest: "images/" });

const fs = require("fs");
const { get } = require("http");

// middleware
app.use(cors());
app.use(express.json());

//Routes//

// auth a user

app.post("/users/auth", async (req, res) => {
  try {
    const { user_email, user_password } = req.body;
    const checkUser = await pool.query(
      "SELECT * FROM users WHERE email = $1 AND password = $2",
      [user_email, user_password]
    );
    if (checkUser.rows.length === 0) {
      res.status(404).json({ message: "User not found" });
    } else {
      res.json(checkUser.rows[0]);
    }
  } catch (error) {
    console.error(error.message);
  }
});

//create a user
app.post("/users", async (req, res) => {
  try {
    const { user_email, user_password, admin } = req.body;
    const userUnique = await pool.query(
      "SELECT * FROM users WHERE email = $1",
      [user_email]
    );
    if (userUnique.rows.length !== 0) {
      res.status(404).json({ message: "User already exist" });
    } else {
      const newUser = await pool.query(
        "INSERT INTO users(email,password,admin) VALUES ($1,$2,$3) RETURNING *",
        [user_email, user_password, admin]
      );
      res.json(newUser.rows[0]);
    }
  } catch (error) {
    console.error(error.message);
  }
});

// change password
app.put("/change_password", async (req, res) => {
  try {
    const { user_id, new_password } = req.body;
    const changePassword = await pool.query(
      "UPDATE users SET password = $1 WHERE user_id = $2 RETURNING *",
      [new_password, user_id]
    );
    res.json({ status: 200, user: changePassword.rows[0] });
  } catch (error) {
    console.error(error.message);
  }
});

//get all users

app.get("/users", async (req, res) => {
  try {
    const allUsers = await pool.query("SELECT * FROM users");
    res.json(allUsers.rows);
  } catch (error) {}
});

//get a user by id

app.get("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await pool.query("SELECT * FROM users WHERE user_id = $1", [
      id,
    ]);
    res.json(user.rows[0]);
  } catch (error) {}
});

// delete a user
app.delete("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletUser = await pool.query(
      "DELETE FROM users WHERE user_id = $1 RETURNING *",
      [id]
    );
    res.json(deletUser.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

// makes imges folder static so that it can be accessed by anyone
app.use("/images", express.static("images"));

// create a product
app.post("/products", upload.single("product_image"), async (req, res) => {
  try {
    const { product_name, product_price, product_description, category, sale } =
      req.body;

    const product_image = req.file.filename;

    const newProduct = await pool.query(
      "INSERT INTO products(product_name,  description, price, img_url, category, sale) VALUES ($1,$2,$3,$4,$5, $6) RETURNING *",
      [
        product_name,
        product_description,
        product_price,
        product_image,
        category,
        sale,
      ]
    );
    res.json(newProduct.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

//get all products

app.get("/products", async (req, res) => {
  try {
    const allproducts = await pool.query("SELECT * FROM products");

    res.json(allproducts.rows);

    allproducts.rows.map((item) => {
      const product = { ...item };
      console.log(product);
    });

    console.log(allproducts);
  } catch (error) {
    console.error(error.message);
  }
});

// get all products for user with favorite
app.get("/user/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const allproducts = await pool.query("SELECT * FROM products");

    const allUserFavorites = await pool.query(
      "SELECT product_id FROM users_favorite_products where user_id = $1",
      [id]
    );
    let favoriteIds = [];
    allUserFavorites.rows.map((product) => {
      favoriteIds.push(product.product_id);
    });
    res.json(
      allproducts.rows.map((product) => ({
        ...product,
        favorite: favoriteIds.includes(product.product_id),
      }))
    );
  } catch (error) {
    console.error(error.message);
  }
});

// get a product by id
app.get("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await pool.query(
      "SELECT * FROM products WHERE product_id = $1",
      [id]
    );
    res.json(product.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

// delete a product
app.delete("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteProduct = await pool.query(
      "DELETE FROM products WHERE product_id = $1 RETURNING *",
      [id]
    );
    res.json(deleteProduct.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

// update a product
app.put("/products/:id", upload.single("product_image"), async (req, res) => {
  try {
    const { id } = req.params;
    const { product_name, product_price, product_description, category, sale } =
      req.body;

    if (req.file) {
      const product_image = req.file.filename;
      const updateProduct = await pool.query(
        "UPDATE products SET product_name = $1, description = $2, price = $3, img_url = $4, category = $5, sale = $6 WHERE product_id = $7 RETURNING *",
        [
          product_name,
          product_description,
          product_price,
          product_image,
          category,
          sale,
          id,
        ]
      );
      res.json(updateProduct.rows[0]);
    } else {
      const updateProduct = await pool.query(
        "UPDATE products SET product_name = $1, description = $2, price = $3, category = $4, sale = $5 WHERE product_id = $6 RETURNING *",
        [product_name, product_description, product_price, category, sale, id]
      );
      res.json(updateProduct.rows[0]);
    }
  } catch (error) {
    console.error(error.message);
  }
});

// get all user favorites

app.get("/user_favorites/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const allUserFavorites = await pool.query(
      "SELECT product_id FROM users_favorite_products where user_id = $1",
      [id]
    );
    let favoriteIds = [];
    allUserFavorites.rows.map((product) => {
      favoriteIds.push(product.product_id);
    });
    res.json(favoriteIds);
  } catch (error) {
    console.error(error.message);
  }
});

// favorite product

app.post("/favorite", async (req, res) => {
  try {
    const { user_id, product_id } = req.body;
    const newFavorite = await pool.query(
      "INSERT INTO users_favorite_products(user_id, product_id) VALUES ($1,$2)",
      [user_id, product_id]
    );
    res.json(newFavorite.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

// unfavorite product
app.delete("/favorite", async (req, res) => {
  try {
    const { user_id, product_id } = req.body;
    const deleteFavorite = await pool.query(
      "DELETE FROM users_favorite_products WHERE user_id = $1 AND product_id = $2 RETURNING *",
      [user_id, product_id]
    );
    res.json(deleteFavorite.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

app.listen(5000, () => {
  console.log("listening on port 5000");
});
