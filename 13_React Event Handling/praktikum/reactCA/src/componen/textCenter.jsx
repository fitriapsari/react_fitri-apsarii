import React, { useState } from "react"

const article = {
  title: {
    id: "Buat Akun",
    en: "Create Account",
  },
  description: {
    id: "Di bawah ini adalah contoh formulir yang dibuat seluruhnya dengan kontrol formulir Bootstrap. Setiap grup formulir yang diperlukan memiliki status validasi yang dapat dipicu dengan mencoba mengirimkan formulir tanpa menyelesaikannya.",
    en: "Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.",
  },
}

function Article() {
  const [lang, setLang] = useState("en")

  const toggleLanguage = () => {
    setLang((prevLang) => (prevLang === "en" ? "id" : "en"))
  }

  return (
    <div>
      <h1>{article.title[lang]}</h1>
      <p>{article.description[lang]}</p>
      <button onClick={toggleLanguage}>
        {lang === "en" ? "Ganti ke Bahasa Indonesia" : "Switch to English"}
      </button>
    </div>
  )
}

export default Article
