<script></script>

<template>
  <main class="main">
    <Title>Обо мне</Title>
    <div class="main-info">
      <div class="img-block">
        <img src="/src/assets/me.png" alt="me" />
      </div>
      <div>
        <h2 class="m-title">Исламов Шамсутдин Джамшидович</h2>
        <p class="birthday">19 лет | 27 июля 2005 год</p>
        <p>г. Ташкент, Алмазарский рн.</p>
      </div>
    </div>

    <div class="info">
      <h2 class="title">Информация</h2>
      <p>
        Меня зовут Шамсутдин. Я — студент второго курса направления Front-end Development в IT Park
        University. Обучение проходит полностью онлайн и на английском языке, что позволяет мне
        гибко совмещать учебу с профессиональной деятельностью.
      </p>

      <p>
        Я окончил SOS IT Academy, постоянно совершенствуюсь через самообразование и прошёл летнюю
        стажировку в EPAM, по итогам которой получил
        <a
          target="_blank"
          href="https://drive.google.com/file/d/14J9gWdcEWa2Ez63WXvIBhqHME8Tn4GFv/view?usp=sharing"
          >сертификат</a
        >
        об успешном завершении программы.
      </p>

      <p>
        Практический опыт включает преподавание и разработку. В Mars IT School я вёл курсы по
        программированию и одновременно работал front-end-разработчиком в IT-департаменте. Позднее в
        частной школе преподавал IT-дисциплины и создал Telegram-бота, для обработки родительских отзывов. В компании FIS Group занимал позицию
        аналитика-проектировщика, соединяя навыки системного анализа с опытом разработки.
      </p>
    </div>
  </main>
</template>

<style scoped>
.main {
  width: 100%;
}

.main-info {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px;
}

.main-info p {
  font-weight: 400;
}

.img-block {
  max-width: 200px;
  width: 100%;
  border-radius: 50%;
}

.img-block img {
  border-radius: 50%;
}

.birthday {
  margin: 10px 0 5px;
}

.info {
  padding: 20px;
}

.info p {
  margin-top: 20px;
  font-weight: 400;
}

.info p a {
  text-decoration: underline;
  color: blue;
}
</style>
