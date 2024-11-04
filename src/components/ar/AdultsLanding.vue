<template>
  <PopUp />
  <AdultsSectionOne />
  <AdultsSectionTwo />
  <AdultsSectionThree />
  <AdultsSectionFour />
  <AdultsSectionFive />
  <AdultLevels />
  <FormSection />

  <!--Section Eight Content-->
  <div class="kids-sec8">
    <div class="kids-sec8-row">
      <h4>الآراء الإيجابية <br><span> لأولياء الأمور</span></h4>
      <p>آراء طلابنا الإيجابية تعكس بوضوح الأثر العميق لدوراتنا على مساراتهم المهنية. فهم يؤكدون باستمرار على كيفية مساهمة هذه الدورات في تحسين أدائهم في العمل، وتعزيز مهاراتهم العملية، مما يشير إلى القيمة الكبيرة والفائدة الهائلة التي تقدمها أكاديميتنا.</p>
    </div>

    <div class="adult-swiper">
      <div ref="swiperContainer" class="swiper-container">
        <div class="swiper-wrapper">
          <div v-for="(review, index) in reviews" :key="index" class="swiper-slide">
            <p>
              <span class="review-stars">{{ '★'.repeat(review.stars) }}</span>
            </p>
            <p>{{ review.review }}</p>
            <p class="review-by">{{ review.by }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <PackagesAdults ref="packagesSection"/>
  <ViewAdults />
  <div class="full-section">
    <div class="Last-section">
      <h1>مازلت تحتاج للمساعدة ؟</h1>
      <p>يسعدنا استقبال رسائلكم والرد على جميع استفساراتكم.</p>
      <a href="https://www.monglish.co.uk/ar/contact" class="contact-btn">تواصل معنا</a>
    </div>
  </div>
 
</template>

<script>
import AdultLevels from '../../components/ar/AdultLevels.vue';
import AdultsSectionOne from '../../components/ar/AdultsSectionOne.vue';
import AdultsSectionTwo  from '../../components/ar/AdultsSectionTwo.vue';
import AdultsSectionThree from '../../components/ar/AdultsSectionThree.vue';
import AdultsSectionFour from '../../components/ar/AdultsSectionFour.vue';
import AdultsSectionFive from '../../components/ar/AdultsSectionFive.vue';
import PackagesAdults from '../../components/ar/PackagesAdults.vue';
import ViewAdults from '../../components/ar/ViewAdults.vue';
import FormSection from '../../components/ar/FormSection.vue';
import PopUp from '../../components/ar/PopUp2.vue';

import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default {
  name: 'AdultsCourses',
  components: {
    AdultLevels,
    AdultsSectionOne,
    AdultsSectionTwo,
    AdultsSectionThree,
    AdultsSectionFour,
    AdultsSectionFive,
    PackagesAdults,
    ViewAdults,
    FormSection,
    PopUp
  },
  data() {
    return {
      activeDescription: null,
      totalSections: 3,
      currentIndex: 0,
      reviews: [
        {
          stars: 5,
          review:
            'جزاك الله خير انا حضرت المحاضرة كامله معاها ماشاء الله أسلوبه متميز يتسم بالهدوء أثناء الشرح',
          by: 'عبد الله عوده',
        },
        {
          stars: 4,
          review:
            'الله يعطيكم العافية بصراحه تمنيت اني دخلت عبد الرحمن من زمان لاني لاحظت تطور كبير و هذا بفضل الله وتوفيقة ثم بفضل جهدكم معانا واهتمامكم بأدق ادق التفاصيل و متابعة الواجابات و حرصكم بتذكيرنا بمواعيد الاندية كانه ابن لكم',
          by: 'ام عبد الرحمن',
        },
        {
          stars: 5,
          review:
            'لا بجد ما شاء الله ربنا يبارك فيها من أجمل واحسن المدرسين اللي في الأكاديمية و غير الضمير الي عندها ربنا يرضيها يارب في حياتها',
          by: 'والدة إياد',
        },
        {
          stars: 5,
          review:
            'السلام عليكم ورحمة الله وبركاته نادي القراءة حقيقي اللي مسؤوله عنه مره ممتازة ما شاء الله و بترد في اسرع وقت وتقوم بتحديد الموعد و ملتزمة جدا جزاها الله خيرا',
          by: 'فهد محمد',
        },
      ],
      swiper: null, 
    };
  },
  mounted() {
        this.scrollToPackagesWithDelay();

    this.$nextTick(() => {
      const swiperContainer = this.$refs.swiperContainer;
      if (swiperContainer) {
        this.swiper = new Swiper(swiperContainer, {
          loop: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        });
        this.startAutoNavigate();
      }
    });
  },
  methods: {
    startAutoNavigate() {
      setInterval(() => {
        if (this.swiper) {
          this.swiper.slideNext(); 
        }
      }, 3000); 
    },
    toggleDescription(id) {
      this.activeDescription = this.activeDescription === id ? null : id;
    }, scrollToPackagesWithDelay() {
      setTimeout(() => {
        if (this.$route.hash === '#packages-section') {
          const packagesSection = this.$refs.packagesSection;
          if (packagesSection) {
            packagesSection.$el.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, 300); 
    }
  },
  watch: {
    '$route.hash'() {
      this.scrollToPackagesWithDelay();
    }
  }
}
</script>

<style scoped>
/* Section 8 style */
.kids-sec8 {
  padding: 2% 2% 3% 2%;
  background-color: white;
  height: auto; 
  direction: rtl;
}
.kids-sec8-row {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 2em;
  font-family: 'DIN Next LT Arabic';
  font-weight: 500;
  color: #165e84;
}
.kids-sec8-row h4 {
  font-size: 3vw;
}
.kids-sec8-row span {
  font-size: 3.2vw;
  font-family: 'DIN Next LT Arabic';
  font-weight: 500;
}
.kids-sec8-row p {
  font-size: 1.3rem;
  color: gray;
  max-width: 75%;
  margin: 0 auto;
}
@media (min-width: 769px) {
  .kids-sec8-row {
    flex-direction: row;
    justify-content: center;
    text-align: right;
  }
  .kids-sec8-row h4 {
    width: 25%;
    margin: 0;
    font-size: 48px;
  }
  .kids-sec8-row h4 span{
    font-size: 48px;
  }
  .kids-sec8-row p {
    width: 70%;
    margin: 0;
  }
}
@media (max-width: 769px) {
  .kids-sec8-row {
    flex-direction: column;
    text-align: center;
  }
  .kids-sec8-row h4 {
    width: 100%;
    padding-right: 0;
    font-size: 28px;
  }
  .kids-sec8-row h4 span{
    width: 100%;
    padding-right: 0;
    font-size: 28px;
  }
  .kids-sec8-row p {
    width: 100%;
    padding-left: 0;
    font-size: 20px;
  }
}
.adult-swiper {
  width: 100%;
  max-width: 100%;
  margin: auto;
  background-color: #fff;
  margin-top: 1em;
    padding: 0 2% 0 2%;

}
.swiper-container {
  width: 100%;
  background-image: url('@/assets/images/rev-bg.png');
  background-size: cover;
  background-position: center;
  border-radius: 25px; 
  overflow: hidden;
}
.swiper-slide {
  color: #fff;
  text-align: center;
  font-size: 1.5em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 300px; 
}
.swiper-slide p {
  font-family: 'DIN Next LT Arabic', sans-serif;
  font-weight: 500;
  padding: 1em;
  max-width: 80%;
  margin: 0 auto;
}
.review-stars {
  color: #ff9800;
  font-size: 2.5rem;
}
.review-by {
  margin-top: 15px;
  font-weight: bold;
  font-size: 1.5rem; 
  color: #fff;
  text-decoration: underline;
  text-decoration-color: #ff9800;
  text-decoration-thickness: 2px;
  text-underline-offset: 10px;
  font-family: 'DIN Next LT Arabic', sans-serif;
}

.Last-section {
  width: 100%;
  background-color: #eee;
  border-radius: 15px;
  direction: rtl;
  text-align: right;
  position: relative;
  padding: 20px;
  margin: 0 auto;
}

.full-section{
  background-color: #fff;
  padding: 2% 7% 2% 5%;
}
.Last-section h1 {
  font-size: 40px;
  line-height: 60px;
  font-family: 'DIN Next LT Arabic', sans-serif;
  font-weight: 500;
}

.Last-section p {
  font-family: 'DIN Next LT Arabic', sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 32px;
}

.contact-btn {
  display: inline-block;
  background: linear-gradient(111.84deg, #2C80AC 0%, #165E84 100%);
  color: white;
  padding: 10px 20px;
  border-radius: 25px;
  text-align: center;
  text-decoration: none;
  font-family: 'DIN Next LT Arabic', sans-serif;
  font-size: 20px;
  font-weight: 500;
  position: absolute;
  left: 20px; 
  bottom: 20px;
}

@media (max-width: 1440px) {
  .full-section{
    padding: 2% 9% 2% 8%;
  }
}

@media (max-width: 1240px) {
  .full-section{
    padding: 2% 11% 2% 8%;
  }
}

@media (max-width: 1040px) {
  .full-section{
    padding: 2% 13% 2% 10%;
  }
}

/* Mobile Styles */
@media (max-width: 768px) {
  .Last-section {
    width: 95%;  /* Full width for mobile */
    padding: 10px;  /* Adjust padding */
    margin: 20px auto;  /* Adjust margin */
  }

  .Last-section h1 {
    font-size: 28px;  /* Smaller font size for mobile */
    line-height: 40px;  /* Adjust line height */
  }

  .Last-section p {
    font-size: 16px;  /* Smaller font size for mobile */
    line-height: 24px;  /* Adjust line height */
  }

  .contact-btn {
    padding: 8px 16px;  /* Adjust padding */
    font-size: 18px;  /* Smaller font size for mobile */
    position: relative;  /* Change position to relative */
    left: auto;  /* Reset right position */
    bottom: auto;  /* Reset bottom position */
    margin-top: 10px;  /* Add margin for spacing */
  }
}
</style>
