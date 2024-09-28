export type OptionAnswer = {
  answer: string;
  id: string;
  isCorrect: boolean;
};

export type QuestionMultipleChoice = {
  question: string;
  type: "multiple-choice" | "true-false";
  optionsAnswers: OptionAnswer[];
};

export type QuestionFillInTheBlank = {
  question: string;
  type: "fill-in-the-blank";
  answer: string;
};

export type Question = QuestionMultipleChoice | QuestionFillInTheBlank;

export type Quiz = {
  questions: Question[];
};

export type Material = {
  slug: string;
  title: string;
  type: "text" | "video" | "link";
  description: string;
  content: string;
  quiz?: Quiz;
};

export type Exam = {
  title: string;
  description: string;
  questions: Question[];
  examTimeLimit: number; // in minutes
};

export type Content = {
  slug: string;
  level: number;
  name: string;
  icon: string;
  description: string;
  materials: Material[];
  exam?: Exam;
};

export type Course = {
  slug: string;
  title: string;
  videoYoutubeIntro: string;
  passingGrade: number;
  contents: Content[];
  about: string;
  learningOutcomes: string[]; // Tujuan yang dapat ditempuh oleh peserta dalam mengikuti kursus ini
};

export const courseData: Course = {
  slug: "wujud",
  title: "Wujud Benda dan Perubahannya",
  videoYoutubeIntro: "3QfYn9I-cEI",
  passingGrade: 80,
  about:
    "Pelajaran ini akan mengenalkan tiga wujud benda yang ada di sekitar kita, yaitu padat, cair, dan gas, serta perubahan yang dapat terjadi pada benda-benda tersebut. Kita akan belajar bagaimana benda-benda bisa berubah wujud, seperti es yang mencair menjadi air, atau air yang menguap menjadi uap. Pelajaran ini juga memberikan contoh nyata dari perubahan wujud yang dapat kita lihat sehari-hari.",
  learningOutcomes: [
    "Mengenal konsep gaya arah dan gaya bergerak",
    "Mengenal cara membedakan gaya arah dan gaya bergerak",
    "Menguasai cara membedakan gaya arah dan gaya bergerak di dalam konteks fisika",
  ],
  contents: [
    {
      slug: "wujud-benda-dan-sifatnya",
      level: 1,
      name: "Wujud Benda dan Sifatnya",
      icon: "🧊",
      description: "Mengenal tiga wujud benda dan sifat-sifatnya",
      materials: [
        {
          slug: "materi-1a",
          title: "Apa Itu Benda?",
          type: "text",
          description:
            "Benda adalah suatu kata yang dalam penggunaannya sering dapat dipetukarkan dengan kata-kata semisal 'objek', 'materi', 'zat' dan 'barang'.",
          content: `
![](https://pjrjxbdononaezaz.public.blob.vercel-storage.com/Sains%20Wujud%20Benda%20Presentasi%20Biru%20Ceria-ZZ5Sj113qOhkazeR3eX6iWQVEbfALF.png)
# 1. *Wujud Padat* 

### *Sifat Benda Padat*

a. Bentuk dan volume tetap

b. Memiliki massa

c. Dapat berubah bentuk dengan cara tertentu. Misalnya di tekan, dipotong atau dipukul

Contoh: batu, buku, pensil.

![](https://pjrjxbdononaezaz.public.blob.vercel-storage.com/4-Y4A6VGdSSIfwSeL7LyT70l9DuUGtgO.png)

# 2. *Wujud Cair* 

### *Sifat Benda Cair*

a. Bentuk mengikuti bentuk wadahnya

b. Menempati ruang dan memiliki massa

c. Memiliki permukaan datar

d. Mengalir dari tempat yang tinggi ke tempat rendah

e. Menekan ke segala arah

Contoh: air, minyak, sirup.

![](https://pjrjxbdononaezaz.public.blob.vercel-storage.com/5-emT4mqLbCILSY84kuJ8EyOhcywgdh4.png)

# 3. *Wujud Gas*

### *Sifat Benda Gas*

a. Menempati ruang

b. Bentuk tidak tetap

c. Memiliki massa

d. Menekan ke segala arah

e. Tidak dapat dilihat tetapi dapat dirasakan.

Contoh: udara, uap air.

![](https://pjrjxbdononaezaz.public.blob.vercel-storage.com/6-8ozvauUvOODWIJZdrgxH3lds8oACcp.png)
          `,
        },
        {
          slug: "video-1b",
          title: "Jenis dan Sifat Wujud Benda",
          type: "video",
          description: "Video tentang jenis dan sifat wujud benda",
          content: "JnNY6ooUh34",
        },
        {
          slug: "video-1c",
          title: "Lagu Wujud Benda",
          type: "video",
          description: "Video tentang lagu sifat wujud benda",
          content: "PwDF-Pp-MYA",
        },
      ],
      // exam: {
      //   title: "Ujian Wujud Benda dan Sifatnya",
      //   description: "Uji pemahamanmu tentang wujud benda dan sifat-sifatnya!",
      //   questions: [
      //     {
      //       question:
      //         "Manakah di antara berikut yang merupakan contoh benda padat?",
      //       type: "multiple-choice",
      //       optionsAnswers: [
      //         { answer: "Air", id: "1", isCorrect: false },
      //         { answer: "Udara", id: "2", isCorrect: false },
      //         { answer: "Batu", id: "3", isCorrect: true },
      //         { answer: "Uap air", id: "4", isCorrect: false },
      //       ],
      //     },
      //     {
      //       question: "Benda cair memiliki bentuk yang tetap. (Benar/Salah)",
      //       type: "true-false",
      //       optionsAnswers: [
      //         { answer: "Benar", id: "1", isCorrect: false },
      //         { answer: "Salah", id: "2", isCorrect: true },
      //       ],
      //     },
      //     {
      //       question: "Sebutkan salah satu sifat benda gas!",
      //       type: "fill-in-the-blank",
      //       answer: "Menempati ruang",
      //     },
      //   ],
      //   examTimeLimit: 10,
      // },
    },
    {
      slug: "perubahan-wujud-benda",
      level: 2,
      name: "Perubahan Wujud Benda",
      icon: "🔄",
      description: "Mempelajari berbagai jenis perubahan wujud benda",
      materials: [
        {
          slug: "materi-2a",
          title: "Perubahan Wujud Benda",
          type: "text",
          description:
            "Benda dapat berubah wujud jika mengalami perubahan suhu, seperti dipanaskan atau didinginkan. Berikut adalah beberapa jenis perubahan wujud yang umum terjadi",
          content: `
![](https://pjrjxbdononaezaz.public.blob.vercel-storage.com/1-wzN2K0tqB2Vd0uMoyFNBIjHAlhajbD.png)
          
# *1. Mencair*

**Perubahan wujud dari benda padat menjadi cair.**

Contoh :

- Coklat batangan akan meleleh apabila dipanaskan hingga suhu tertentu.

- Lilin yang dibakar akan meleleh apabila dipanaskan.

![](https://pjrjxbdononaezaz.public.blob.vercel-storage.com/2-0B46LwRYzvwBqTIB1Tc0PZAHzNIioZ.png)

# *2. Membeku*

**Perubahan wujud dari benda cair menjadi padat.**

Contoh :

- Air yang dibekukan pada freezer berubah menjadi es

![](https://pjrjxbdononaezaz.public.blob.vercel-storage.com/3-ngtsAxlCM0glwnA0Big64XdKBo4R2x.png)

# *3. Mengembun*

**Perubahan wujud dari benda gas menjadi cair.**

Contoh :

- 	Embun yang muncul pada daun-daun rumput di pagi hari

-  Gelas kaca yang mengembun karena berisi air dingin atau es batu.

![](https://pjrjxbdononaezaz.public.blob.vercel-storage.com/5-gmht0CkAWrkxREl0QCobS8KJcZdu93.png)

# *4. Menguap*

**Perubahan wujud dari benda cair menjadi gas.**

Contoh :

- Air yang di panaskan akan mendidih dan mengeluarkan uap air.

- Kain basah yang dijemur pada siang hari menjadi kering.

- Keringat yang mengering pada tubuh kita pada siang hari.

![](https://pjrjxbdononaezaz.public.blob.vercel-storage.com/4-rJLLJYTF0fYnHpfHFTK5a1lbAmJV5y.png)
          `,
        },
        {
          slug: "video-2b",
          title: "Video Pembelajaran",
          type: "video",
          description: "Video tentang perubahan wujud benda",
          content: "TtxD0Us0Ni0",
        },
        {
          slug: "video-2c",
          title: "Video Pembelajaran",
          type: "video",
          description: "Lagu tentang perubahan wujud benda",
          content: "LMUAZz29uH0",
        },
      ],
      exam: {
        title: "Ujian Perubahan Wujud Benda",
        description: "Uji pemahamanmu tentang perubahan wujud benda!",
        questions: [
          {
            question:
              "Proses perubahan wujud dari cair menjadi padat disebut...",
            type: "fill-in-the-blank",
            answer: "membeku",
          },
          {
            question: "Manakah yang merupakan contoh peristiwa mencair?",
            type: "multiple-choice",
            optionsAnswers: [
              { answer: "Es batu menjadi air", id: "1", isCorrect: true },
              { answer: "Air menjadi uap", id: "2", isCorrect: false },
              { answer: "Uap air menjadi air", id: "3", isCorrect: false },
            ],
          },
        ],
        examTimeLimit: 8,
      },
    },
    {
      slug: "pengaruh-suhu",
      level: 3,
      name: "Pengaruh Suhu",
      icon: "🌡️",
      description: "Memahami bagaimana suhu mempengaruhi perubahan wujud benda",
      materials: [
        {
          slug: "materi-3a",
          title: "Pengaruh Panas (Suhu Naik)",
          type: "text",
          description:
            "Penjelasan tentang bagaimana panas (kenaikan suhu) dapat mengubah wujud benda.",
          content:
            "Jika benda padat dipanaskan, bisa mencair. Jika benda cair dipanaskan lebih lanjut, bisa menguap. Misalnya, lilin padat yang dipanaskan akan meleleh, dan air mendidih akan menguap menjadi uap air.",
          quiz: null,
        },
        {
          slug: "materi-3b",
          title: "Pengaruh Dingin (Suhu Turun)",
          type: "text",
          description:
            "Penjelasan tentang bagaimana dingin (penurunan suhu) dapat mengubah wujud benda.",
          content:
            "Jika benda cair didinginkan, bisa membeku menjadi padat. Gas yang didinginkan bisa mengembun menjadi cair. Contohnya, air di dalam freezer berubah menjadi es, atau uap air di udara berubah menjadi embun saat pagi hari.",
          quiz: null,
        },
      ],
      exam: {
        title: "Ujian Pengaruh Suhu",
        description:
          "Uji pemahamanmu tentang pengaruh suhu pada perubahan wujud benda!",
        questions: [
          {
            question:
              "Apa yang terjadi pada air jika didinginkan hingga mencapai 0 derajat Celsius?",
            type: "fill-in-the-blank",
            answer: "membeku",
          },
          {
            question:
              "Ketika uap air di udara mendingin, uap air tersebut akan mengalami proses ... menjadi embun.",
            type: "fill-in-the-blank",
            answer: "mengembun",
          },
        ],
        examTimeLimit: 5,
      },
    },
  ],
};
