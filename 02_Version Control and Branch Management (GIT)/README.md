# Versioning

Mengatur versi dari source code program

# Version Control System

Version Control System (VCS) memiliki fungsi untuk mencatat versi atau riwayat perubahan dari source code yang ada. Keberadaan sistem version control berbasis cloud membantu kolaborasi antara banyak orang dalam proyek yang sama. Fleksibilitas menjadi poin penting karena dapat melacak siapa yang melakukan perubahan, apa yang diubah, dan memungkinkan untuk mengembalikan ke versi sebelumnya dari source code.

### Single User

- SCCS - 1972 Unix only
- RCS - 1982 Cross platfrom, text only

### Centralized

- 1986 focus
- perforce - 1995
- Subverssion - 2000 - track directory structure
- Microsoft team foundation server - 2005

### Distributed

- **Git - 2005** vsc yang paling sering digunakan dibuat oleh Linus Torvald (2005)
- Mercurial - 2005
- Bazaar - 2005

# GIT

Vcs populer yang digunakna para developer untuk mengembangkan software secara bersama-sama.
**Terdistribusi** bukan tersentralisasi.
Git repository = folder project

# Setting Up

### Git Init

Berguna untuk membuat sebuah repositori Git baru dalam direktori

### Git clone

Berguna untuk mengambil salinan lengkap dari repositori Git yang sudah ada dari server ke komputer lokal

### Git Config

Berguna untuk mengatur konfigurasi Git, seperti nama pengguna, alamat email, preferensi tampilan, dan lainnya. Konfigurasi diterapkan pada repositori lokal.

### Staging area

Staging area adalah tempat di antara direktori kerja dan
repositori Git di mana tempat menyiapkan perubahan sebelum
melakukan commit.

- working directory ==> git add
- staging area ==> git commit
- repository

# Saving Change

### Git Diff

Berguna untuk membandingkan perubahan antara dua titik dalam sejarah repositori seperti perubahan antara dua commit atau antara working directory dan staging area.

### Git Stash

Berguna untuk menyimpan perubahan sementara yang belum di-commit

# Syncling

### Git Fork

Berguna membuat salinan dari repositori Git milik orang lain di akun git sendiri

### Git Push

Berguna untuk mengirimkan perubahan yang telah Anda lakukan pada kode sumber di repositori lokal ke repositori Github.

### Git Fetch

Berguna untuk mengambil semua perubahan yang ada di remote repository tanpa menggabungkannya dengan repositori lokal

### Git Pull

Untuk menggabungkan perubahan yang ada di remote repository ke dalam repositori lokal.

# Cara mengungah file lokal ke github

```
1. git add .(memindah changes ke staged)
2. git commit (-m "messages")
3. git push
```

# Branching

Cabang-cabang terpisah dari kode sumber utama dalam repositori yang berguna dalam pengembangan karena memungkinkan tim untuk bekerja secara paralel pada fitur atau perbaikan yang berbeda-beda tanpa mengganggu kode sumber utama.

# Git Branches

```

 git branch <nama branch> co/ git branch <developer>
 git push -u origin developer
 git commit -m "h1 developer"
 git checkout main
 git branch
 git merge developer
```

# workflow git hub

Memahami bagaimana alur pada github dengan baik dan benar untuk memudahkan dalam kegiatan proyek.
