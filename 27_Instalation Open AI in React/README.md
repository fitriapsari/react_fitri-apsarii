# Resume Materi Instalation Open AI

### Kenapa Belajar OpenAI

1. Gratis
2. Mudah dipasang dan mudah digunakan
3. Dipakai banyak user
4. Jumlah parameter: 175 miliar (model davici 03)

### Starting Point

- Setiap code dalam ppt sudah di upload dalam link: https://github.com/attoyibi/open-api/tree/main/basic-installation untuk memudahkan belajar

- Dokumentasi OpenAI: https://platform.openai.com/docs/api-reference dan https://platform.openai.com/docs/introduction

### Persiapan

1. Pemahaman mengenai react
2. Dapat menggunakan git/github atau sejenisnya
3. Menginstall npm/yarn/etc
4. Mempunyai code editor
5. Laptop dan internet

### Pemasangan OpenAI di React

1. Membuat react project
   <br/>

   ```
   yarn create vite
   ```

2. Install package OpenAI
   <br/>

   ```
   npm install openai@^4.0.0

   ```

3. Import module yang dperlukan
   <br/>

   ```

   import { useState } from "react";
   import { Configuration, OpenAIApi } from "openai";

   ```

4. Deklarassi Object
   <br/>

```
    const configuration = new Configuration({
    apiKey: "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",
  });
  const openai = new OpenAIApi(configuration);

```

5. Deklarasi State

```
  const configuration = new Configuration({
    apiKey: "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",
  });
  const openai = new OpenAIApi(configuration);

```

6. Deklarasi handleclick

```
    const handleClick = async () => {
    setLoading(true);
    try {
      const response = await openai.createCompletion({
        model: "text-davinci-003",
        // model: "gpt-3.5-turbo",
        prompt: prompt,
        temperature: 0.5,
        max_tokens: 100,
      });
      setResult(response.data.choices[0].text);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

```

7. Rendering Komponen

```
 <main className="main">
      <div className="w-2/4 mx-auto">
        <textarea
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Write your prompt.."
          className="textarea"
        ></textarea>

        <button
          onClick={handleClick}
          disabled={loading || prompt.length === 0}
          className="btn"
        >
          {loading ? "Generating..." : "Generate"}
        </button>

        <pre className="result">{result}</pre>
      </div>
    </main>
```

### Cara Mendapatkan API Keys

1. Buka situs web OpenAI => https://platform.openai.com/docs/api-reference
2. Buatlah akun pada OpenAI
3. Cari bagian introduction terdapat dalam tulisan API Keys warna biru lalu diklik
4. Pilih letak API Keys dan create new secret key
5. Ikuti petunjuk untuk mengkonfigurasi kunci API sesuai dengan kebutuhan
6. Masukan API Keys ke dalam project React yang telah dibuat
