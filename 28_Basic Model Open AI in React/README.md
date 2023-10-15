# Resume Basic Model Open AI in React

## Basic Open AI dan Prompt Engineer

### Kenapa Belajar Model Open AI dan Prompt Engineer?

1. Meningkatkan Penggunaan Model OpenAI
2. MenjadiBagian dari Komunitas AI
3. Mengoptimalkan Output Model AI
4. Membangun Aplikasi AI yang lebih relevan
5. Meningkatkan Daya saing di bidang AI

### Basic Model Open AI

Model OpenAI pada platfrom OpenAI.com adalah sebuah sistem kecerdasan buatan (AI) yang dapat digunakan untuk mempelajari pola-pola dari data dan menghasilkan output yang sesuai dengan data yang diberikan.

- Model GPT-4
  GPT-4 adalah model bahasa alami (NLP) generasi baru yang dikembangkan oleh OpenAI setelah GPT-3. Diharapkan memiliki lebih dari 10 trilliun parameter.

- GPT 3.5
  GPT-3.5 adalah model bahasa alami (NLP) generasi baru yang dikembangkan oleh OpenAI setelah GPT-3. Memiliki lebih dari 6 miliar parameter dan memiliki beberapa fitur baru seperti kemampuan unutk mengenali bahasa kode dan kemampuan untuk menyelesaikan masalah matematika.

- DALL-E (image)
  DALL-E adalah model pembangkit gambar generatif yang dikembangkan oleh OpenAI. Memiliki lebih dari 12 milliar parameter.

- Whisper
  Whisper adalah model pengenalan suara untuk keperluan umum. Menggunakan Python 3.9.9 dan PyTorch 1.10.1

- Embedding
  Embedding mengukur keterkaitan antara dua bagian teks. Biasa digunakan ada:

1. Mencari (Search)
2. Kelompokan (Clustering)
3. Rekomendasi
4. Deteksi anomali
5. Pengukuran keragaman
6. Klasifikasi

- Moderation
  Moderation adalah model pembelajaran mesin yang dirancang untukmemeriksa apakah konten sesuai dengan kebijakan penggunaan OpenAI.

- GPT-3
  Model generasi bahasa alami berbasis Transformer yang dikembangkan oleh OpenAI.

- Codex
  Model yang telah usang dan kemampuannya disempurnakan oleh GPT-3

### Basic Prompt Engineer

Prompt engineer adalah teknik yang digunakan untuk mengoptimalkan output dari model AI dengan memberikan prompt atau instruksi pada model tersebut.

### Best Practice Prompt Engineer

1. Prompt relevan dengan output
2. Berikan contoh keluaran yan kalian inginkan
3. Dapatkan informasi dari berbagai sumber
4. Berikan data dengan jumlah yang benar

### Setting Open AI

- `model:`
  <br/>
  model bahasa yang akan digunakan untuk menghasilkan teks. Contoh model yang populer adalah "gpt-3.5-turbo" dan "text-davinci-003".

- `messages: `
  <br/>
  array yang berisi objek pesan. Setiap objek pesan memiliki dua properti: role (seperti "system", "user", atau "assistant") dan content yang berisi teks pesan.

- `max_tokens:`
  <br/>
  opsi yang memungkinkan untuk membatasi jumlah token dalam respons. Membantu mengontrol panjang respons yang dihasilkan oleh model.

- `temperature:`
  <br/>
  npm mengontrol sejauh mana model memilih opsi yang acak dalam responsnya. Nilai yang lebih tinggi seperti 0.8 akan menghasilkan respons yang lebih bervariasi, sedangkan nilai yang lebih rendah seperti 0.2 akan membuat respons lebih deterministik.

- `stop:`
  <br/>
  Mengatur model untuk berhenti menghasilkan teks ketika token tertentu ditemukan. Ini sering digunakan untuk mengakhiri respons pada titik tertentu.

- ` frequency_penalty:`
  <br/>
  Ini mengontrol sejauh mana model menghindari mengulangi kata atau frasa yang sering muncul dalam responsnya.

- `presence_penalty:`
  <br/>
  Ini mengontrol sejauh mana model mencoba untuk menggunakan kata atau frasa yang telah disebutkan dalam pesan-pesan sebelumnya dalam percakapan.
