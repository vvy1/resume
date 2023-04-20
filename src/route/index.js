// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані

    title: 'Resume',

    name: {
      firstname: 'Ivan',
      lastname: 'Ivanov',
    },

    position: 'Junior Fullstack JS Developer',

    salary: ' $600 в місяць',

    summary: {
      title:'Summary',
      text: `Open-minded for new technologies, with 1 years of
      experience in development. Whenever I start to
      work on a new project I learn the domain and try
      to understand the idea of the project. Good team
      player, every colleague is a friend to me.`,
    }

    social: {
      email: {
        text: 'ivanov@mail.com',
        href: 'mailto:ivanov@mail.com',
      },
      phone: {
        text: '+380670000123',
        href: 'tel:+380670000123',
      },
      linkedin: {
        text: 'LinkedIn',
        href: 'https://www.linkedin.com/in/dmytro-test',
      },
    },
  })
})

// ================================================================

// Підключаємо роутер до бек-енду
module.exports = router
