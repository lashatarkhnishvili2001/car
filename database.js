const _id = () => Math.random().toString(36).substr(2, 9);
const databse = {
  brands: [
    {
      title: "AUDI",
      models: ["a4", "a7", "rs7"],
    },
    {
      title: "BMW",
      models: ["m3", "m4", "m5", "m6", "x5", "x6"],
    },
    {
      title: "PORSCHE",
      models: ["911", "Taycan-Turbo-S", "macan"],
    },

    {
      title: "MERCEDES-BENZ",
      models: ["c300", "c350", "sprinter"],
    },
    {
      title: "Lamborghini",
      models: ["Urus"],
    },
    {
      title: "HYUNDAI",
      models: ["veloster", "sonata"],
    },
    {
      title: "FERRARI",
      models: ["812"],
    },
    {
      title: "BUGATTI",
      models: ["Chiron"],
    },
  ],
  cars: [
    {
      id: _id(),
      brand: "AUDI",
      model: "RS7",
      year: 2021,
      poster:
        "https://static.autoblog.nl/images/wp2019/audi-rs7-grey-front-side-2020-750.jpg",
    },
    {
      id: _id(),
      brand: "PORSCHE",
      model: "Taycan-Turbo-S",
      year: 2020,
      poster:
        "https://cdn.elferspot.com/wp-content/uploads/2020/11/Porsche-Taycan-Turbo-S-kaufen-Deutschland-17-2000x1334.jpg",
    },
    {
      id: _id(),
      brand: "BMW",
      model: "x5",
      year: 2019,
      poster:
        "https://media.ed.edmunds-media.com/bmw/x5-m/2016/oem/2016_bmw_x5-m_4dr-suv_base_fq_oem_1_815.jpg",
    },
    {
      id: _id(),
      brand: "BRABUS",
      model: "G63",
      year: 2020,
      poster:
        "https://cdn.carbuzz.com/gallery-images/840x560/735000/900/735951.jpg",
    },
    {
      id: _id(),
      brand: "FERRARI",
      model: "812",
      year: 2018,
      poster:
        "https://www.adam-themagazine.com/wp-content/uploads/2019/09/ferrari.jpg",
    },
    {
      id: _id(),
      brand: "Lamborghini",
      model: "Urus",
      year: 2021,
      poster:
        "https://www.tuningblog.eu/wp-content/uploads/2020/05/SLC-Widebody-Lamborghini-Urus-24-Zoll-Tuning-6.jpg",
    },
    {
      id: _id(),
      brand: "BUGATTI",
      model: "Chiron",
      year: 2020,
      poster:
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/02-ss300p-3i4-front-1567937037.jpg?crop=0.761xw:0.856xh;0.135xw,0.144xh&resize=2048:*",
    },
    {
      id: _id(),
      brand: "PORSCHE",
      model: "911",
      year: 2021,
      poster:
        "https://cdn.motor1.com/images/mgl/yKJwK/s1/2020-porsche-911-turbo.jpg",
    },
    {
      id: _id(),
      brand: "PORSCHE",
      model: "macan",
      year: 2017,
      poster:
        "https://besthqwallpapers.com/Uploads/21-2-2020/122596/thumb2-porsche-macan-larte-design-2020-exterior-front-view.jpg",
    },
    {
      id: _id(),
      brand: "BMW",
      model: "M3",
      year: 2005,
      poster: "https://www.driven.co.nz/media/100003393/e46.jpg?width=820",
    },
    {
      id: _id(),
      brand: "AUDI",
      model: "a4",
      year: 2007,
      poster:
        "https://media.autoexpress.co.uk/image/private/s--Xtu1tj8c--/f_auto,t_content-image-full-desktop@1/v1568670918/autoexpress/2019/09/audi-a4-2019-1.jpg",
    },
    {
      id: _id(),
      brand: "BMW",
      model: "M5 e60",
      year: 2008,
      poster:
        "https://www.evoretrofits.in/wp-content/uploads/2019/07/7a8cf7c58c8c02a5204e4ae29aa39e4e.jpg",
    },
    {
      id: _id(),
      brand: "HYUNDAI",
      model: "veloster",
      year: 2007,
      poster:
        "https://www.auto.ge/files/10-2020/ad847355/hyundai-285954694_large.jpg",
    },
    {
      id: _id(),
      brand: "BMW",
      model: "M3",
      year: 2010,
      poster: "https://www.topcarrating.com/bmw/2010-bmw-m3-gts-6.jpg",
    },
    {
      id: _id(),
      brand: "MERCEDES-BENZ",
      model: "c300",
      year: 2009,
      poster:
        "https://www.gravityautossandysprings.com/galleria_images/3929/3929_main_l.jpg",
    },
  ],
};
