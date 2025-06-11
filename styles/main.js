/* Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', sans-serif;
  color: #333;
  background-color: #fffdf8;
}

.container {
  max-width: 1200px;
  margin: auto;
  padding: 0 20px;
}

/* Header */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  background-color: #f8f8f8;
}
.logo {
  height: 40px;
}
.nav a {
  margin-left: 20px;
  text-decoration: none;
  color: #6A1B9A;
  font-weight: 600;
}

/* Hero */
.hero {
  position: relative;
  text-align: center;
  padding: 100px 20px;
}
.hero h1 {
  font-family: 'Playfair Display', serif;
  font-size: 3rem;
  color: #6A1B9A;
}
.hero p {
  font-size: 1.2rem;
  margin: 20px 0;
}
.btn {
  background-color: #FFD700;
  color: #6A1B9A;
  padding: 12px 24px;
  border: none;
  cursor: pointer;
  font-weight: bold;
}
.hero-image {
  width: 100%;
  height: 400px;
  object-fit: cover;
  margin-top: -100px;
  z-index: -1;
  position: absolute;
  top: 100px;
  left: 0;
}

/* Services */
.services {
  padding: 60px 0;
  text-align: center;
}
.service-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  margin-top: 40px;
}
.card {
  width: 300px;
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s ease;
}
.card:hover {
  transform: translateY(-10px);
}
.card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.card h3 {
  padding: 15px;
  font-size: 1.2rem;
}
.card p {
  padding: 0 15px 15px;
  font-size: 0.95rem;
  color: #666;
}

/* About */
.about {
  display: flex;
  flex-wrap: wrap;
  padding: 60px 0;
}
.about img {
  width: 100%;
  max-width: 400px;
  margin-right: 30px;
}
.about .text {
  padding-top: 30px;
}
.about h2 {
  margin-bottom: 20px;
}

/* Gallery */
.gallery {
  padding: 60px 0;
  text-align: center;
}
.slider {
  display: flex;
  overflow-x: scroll;
  gap: 20px;
  scroll-behavior: smooth;
}
.slide img {
  width: 100%;
  height: 400px;
  object-fit: cover;
}

/* Contact */
.contact {
  padding: 60px 0;
  background-color: #f8f8f8;
  text-align: center;
}
.contact form {
  max-width: 600px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.contact input,
.contact textarea {
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.contact button {
  background-color: #6A1B9A;
  color: white;
  padding: 12px;
  border: none;
  cursor: pointer;
  font-weight: bold;
}

/* Footer */
.footer {
  text-align: center;
  padding: 20px;
  background-color: #eee;
  color: #666;
}
