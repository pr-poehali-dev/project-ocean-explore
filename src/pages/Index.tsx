export default function Index() {
  return (
    <>
      <div className="grain-overlay" />

      <header className="header">
        <div className="logo">TERRA*VERDE</div>
        <nav>
          <a href="#">Услуги</a>
          <a href="#">О нас</a>
          <a href="#">Проекты</a>
          <a href="#">Контакты</a>
        </nav>
        <button className="btn-cta">Получить расчёт</button>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              ПРИРОДА
              <br />
              У ВАШЕГО <span>ДОМА</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-10 leading-relaxed text-[#555]">
              Создаём ландшафты, которые живут и дышат. Проектирование, посадка, уход — всё под ключ. Превращаем любой участок в место силы.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <button className="btn-cta" style={{ background: "var(--primary)", color: "white" }}>
                Заказать проект
              </button>
              <button className="btn-cta" style={{ background: "white" }}>
                Смотреть работы
              </button>
            </div>
          </div>
          <div className="hero-img">
            <div className="sticker">
              ЖИВОЙ
              <br />
              РЕЗУЛЬТАТ
            </div>
            <div className="floating-tag hidden md:block" style={{ top: "20%", left: "10%" }}>
              #ЛАНДШАФТ
            </div>
            <div className="floating-tag hidden md:block" style={{ bottom: "30%", right: "20%" }}>
              ПОД КЛЮЧ
            </div>
          </div>
        </section>

        <div className="marquee">
          <div className="marquee-content">
            &nbsp; * ЛАНДШАФТНЫЙ ДИЗАЙН * ГАЗОНЫ И ПОСАДКИ * ДОРОЖКИ И МОЩЕНИЕ * СИСТЕМЫ ПОЛИВА * УХОД ЗА САДОМ *
            ЛАНДШАФТНЫЙ ДИЗАЙН * ГАЗОНЫ И ПОСАДКИ * ДОРОЖКИ И МОЩЕНИЕ * СИСТЕМЫ ПОЛИВА * УХОД ЗА САДОМ
          </div>
        </div>

        <section className="section-padding">
          <div className="section-header">
            <h2 className="section-title">НАШИ УСЛУГИ</h2>
            <a
              href="#"
              className="text-sm md:text-base"
              style={{ color: "var(--dark)", fontWeight: 800, textTransform: "uppercase" }}
            >
              Все проекты
            </a>
          </div>

          <div className="menu-grid">
            {/* Услуга 1 */}
            <div className="menu-card">
              <span className="menu-tag">Популярное</span>
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Ландшафтный дизайн"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Дизайн-проект</h3>
                  <span className="price">от 30 000 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Полный проект участка: зонирование, подбор растений, 3D-визуализация и смета.
                </p>
              </div>
            </div>

            {/* Услуга 2 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--secondary)", color: "white" }}>
                Хит
              </span>
              <img
                src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Озеленение"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Посадка и озеленение</h3>
                  <span className="price">от 15 000 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>Подбор и высадка деревьев, кустарников и цветников с гарантией приживаемости.</p>
              </div>
            </div>

            {/* Услуга 3 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--accent)", color: "var(--dark)" }}>
                Сезонное
              </span>
              <img
                src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Уход за садом"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Уход за садом</h3>
                  <span className="price">от 5 000 ₽/мес</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Регулярная стрижка, полив, подкормка и сезонный уход — ваш сад всегда в порядке.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="retro-vibe">
          <div>
            <h2 className="vibe-title">ПРИРОДА — НЕ ДЕКОР. ЭТО СТИЛЬ ЖИЗНИ.</h2>
            <p className="vibe-text">
              Мы не просто сажаем растения. Мы создаём пространства, где хочется жить. От первого эскиза до финальной стрижки газона — работаем честно, с душой и точно в срок. Более 200 реализованных проектов по всему региону.
            </p>
            <button className="btn-cta" style={{ background: "var(--dark)", color: "white", borderColor: "white" }}>
              О компании
            </button>
          </div>
          <div className="vibe-img"></div>
        </section>

        <section className="section-padding">
          <h2 className="section-title" style={{ marginBottom: "40px", textAlign: "center" }}>
            @TERRA.VERDE
          </h2>
          <div className="social-grid">
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Проект 1"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Проект 2"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Проект 3"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Проект 4"
              />
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div>
          <div className="footer-logo">TERRA*VERDE</div>
          <p style={{ color: "#666", lineHeight: 1.6 }}>
            Ландшафтная фирма полного цикла. Проектируем, высаживаем, ухаживаем. Ваш участок — наша гордость.
          </p>
        </div>
        <div className="footer-links">
          <h4>Навигация</h4>
          <ul>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Услуги
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                О нас
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Проекты
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Контакты
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Режим работы</h4>
          <ul>
            <li>Пн–Пт: 9:00 – 19:00</li>
            <li>Сб: 10:00 – 17:00</li>
            <li>Вс: выходной</li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Контакты</h4>
          <ul>
            <li>+7 (999) 000-00-00</li>
            <li>info@terraverde.ru</li>
          </ul>
        </div>
      </footer>
    </>
  );
}
