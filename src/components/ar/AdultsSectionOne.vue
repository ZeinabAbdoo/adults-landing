<template>
  <div class="adults-sec1">
    <div class="text-container">
      <h3>استثمر في مستقبلك، </h3>
      <h1>اطلق العنان لقدراتك مع اللغة الإنجليزية من مونجلش.</h1>
      <h2>حيث يصبح الامتياز واقعًا</h2>
      <p>دورات اللغة الإنجليزية في مونجلش مصممة خصيصًا لك لتلبية طموحاتك واحتياجاتك. نوفر لك تجربة تعليمية متميزة تضمن نتائج مذهلة وعملية في إتقان اللغة!</p>
      <button @click="sendMessage" id="adults-wa1-ar">إشترك معنا الأن
        <i class="fab fa-whatsapp"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MonglishSectionOne",
  methods: {
    async sendMessage() {
      try {
        const response = await fetch(`https://service.monglish.co.uk/api/get-phone-number`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const url = `https://wa.me/${data.phone_number}`; 
        window.open(url, '_blank');
      } catch (error) {
        console.error('Error fetching phone number:', error);
      }
    }
  }
};
</script>

<style scoped>
@import url('https://use.fontawesome.com/releases/v5.8.2/css/all.css');
@import url('https://fonts.googleapis.com/css?family=Lato');

/* Main section styling */
.adults-sec1 {
  background-image: url('@/assets/images/adults/bg.jpg');
  background-size: cover;
  background-position: center;
  position: relative;
  color: #FFF;
  text-align: right;
  padding: 2rem 4rem;
  height: 100vh;
  direction: rtl;
  z-index: 0;
  display: flex;
  align-items: center;
  margin-top: -85px;
}

.adults-sec1::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.text-container {
  max-width: 45%;
  position: relative;
  z-index: 2;
  padding: 4rem 2rem;
}

.adults-sec1 h3,
.adults-sec1 h1,
.adults-sec1 h2,
.adults-sec1 p {
  font-family: 'DIN Next LT Arabic';
  font-weight: 500;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

/* Large desktop */
.adults-sec1 h3 {
  font-size: 30px;
  line-height: 35px;
}

.adults-sec1 h1 {
  font-size: 54px;
  line-height: 75px;
}

.adults-sec1 h2 {
  font-size: 42px;
  line-height: 45px;
}

.adults-sec1 p {
  font-size: 20px;
  line-height: 29px;
}

.adults-sec1 button {
  max-width: 50%;
  padding: 0.5rem 0.75rem 0.7rem 0.75rem;
  background: linear-gradient(45deg, #fe9b4f, #f77919);
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 1.2rem;
  margin-top: 1.5rem;
  font-family: 'DIN Next LT Arabic';
  font-weight: 500;
  transition: background 0.3s ease, transform 0.3s ease;
}

.adults-sec1 button:hover {
  background: linear-gradient(45deg, #f47e23, #fe9b4f);
  transform: scale(1.05);
}

/* Laptop view */
@media (max-width: 1440px) {
  .adults-sec1 {
    padding: 3rem 2rem;
  }

  .text-container {
    max-width: 45%;
    padding: 3rem 1.5rem;
  }

  .adults-sec1 h1 {
    font-size: 40px;
    line-height: 50px;
  }

  .adults-sec1 h2 {
    font-size: 26px;
    line-height: 30px;
  }

  .adults-sec1 p {
    font-size: 18px;
    line-height: 26px;
  }

}

/* Tablet view */
@media (max-width: 1280px) {
  .adults-sec1 h1 {
    font-size: 38px;
    line-height: 50px;
  }

  .adults-sec1 h2 {
    font-size: 24px;
    line-height: 25px;
  }

  .adults-sec1 p {
    font-size: 18px;
    line-height: 25px;
  }
}


/* Mobile view */
@media (max-width: 768px) {
  .adults-sec1 {
    background-image: url('@/assets/images/adults/bg2.jpg');
    text-align: center;
    padding: 1rem;
  }

  .text-container {
    max-width: 100%;
    padding-top: 90%;
  }

  .adults-sec1 h3 {
    font-size: 20px;
    line-height: 28px;
  }

  .adults-sec1 h1 {
    font-size: 30px;
    line-height: 40px;
  }

  .adults-sec1 h2 {
    font-size: 24px;
    line-height: 32px;
  }

  .adults-sec1 p {
    font-size: 16px;
    line-height: 22px;
  }

  .adults-sec1 button {
    max-width: 80%;
  }
}

/* Small mobile view */
@media (max-width: 414px) {
  .adults-sec1 h1 {
    font-size: 24px;
    line-height: 36px;
  }

  .adults-sec1 h2 {
    font-size: 20px;
    line-height: 30px;
  }

  .adults-sec1 p {
    font-size: 14px;
    line-height: 20px;
  }
}
</style>
