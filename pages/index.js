import Layout  from "../components/Layout"

export default function Home() {
  return (
    <>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src="/main/step.png" className="h-full"/>
          <div>
            <h2 className="text-5xl font-bold py-6">Одна платформа - миллион знаний</h2>
            <p className="text-xl py-6">За последние 2 года около 180 наших учеников поступили на грант в вдущие ВУЗы</p>
            <p className="py-6">Пройдите бесплатную диагностику знаний и получите индивидуальный учебный план прямо сейчас!</p>
            <button className="btn btn-secondary">Пройти</button>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full lg:flex-row justify-around py-48 text-2xl">
        <p className="">Опыт преподавания учителей от <span className="font-bold">2 лет</span></p> 
        <p className="">Более <span className="font-bold">50 лучших</span> преподавателей Казахстана</p>
        <p className=""><span className="font-bold">17 предметов</span> для обучения</p>
      </div>
      <div class="hero">
        <div class="hero-content flex-col lg:flex-row">
          <img src="/main/boy_diag.svg" class="" />
          <div>
            <h2 className="text-2xl font-bold py-6">Пройди бесплатную диагностику знаний и получи рекомендации от наших экспертов!</h2>
            <h3 className="text-2xl font-bold py-6">Диагностика знаний поможет</h3>
            <p className="text-xl">Тебе найти слабые и сильные стороны в Твоем обучении и направит на те предметы, которые тебе нужно подтянуть.</p>
            <h3 className="text-2xl font-bold py-6">Индивидуальный учебный план -</h3>
            <p className="text-xl">Пройдите бесплатную диагностику знаний и получите индивидуальный учебный план прямо сейчас!</p>
            <button className="btn btn-secondary my-6">Пройти</button>
          </div>
        </div>
      </div>
      <ul className="steps steps-vertical lg:steps-horizontal text-xl py-36">
        <li className="step step-primary">Создайте аккаунт</li>
        <li className="step step-primary">Выберите предметы для изучения</li>
        <li className="step">Выберите подходящего преподавателя</li>
        <li className="step">Подберите удобную дату и время</li>
        <li className="step">Напишшите пожелания к уроку</li>
        <li className="step">Переходите по ссылке на урок</li>
      </ul>
    </>
  )
}

Home.getLayout = function getLayout(page) {
  return (
    <Layout>
        <>{page}</>
    </Layout>
  )
}