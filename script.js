const backgroundImg = document.getElementById('section-mumbai').querySelector('img')
const Date = document.querySelector('.date')
const CityName = document.querySelector('.city-name')
const CityDescription = document.querySelector('.city-description')

const sectionData = [
    {
        backgroundImg: 'image/mumbai1 wallpepar.avif',
        Date: '02.01.2024',
        CityName: 'mumbai',
        CityDescription: 'Planning to visit Mumbai? Discover how to get there, where to stay, what to do, where to eat and more, in the best guide to Mumbai, from Travel Group',
    },
    {
        backgroundImg: 'image/pune wallpepar.avif',
        Date: '10.01.2024',
        CityName: 'pune',
        CityDescription: 'Pune s historic landmarks, hill forts, picnic spots and fabulous party places make it a favourite with the tourists for quick weekend sojourns.'
    },
    {
        backgroundImg: 'image/hyd wallpepar.avif',
        Date: '26.01.2024',
        CityName: 'Hyderabad',
        CityDescription: 'Hyderabad is a city in the southern Indian state of Telangana. It is the capital of the Indian state of Andhra Pradesh.'
    },
    {
        backgroundImg: 'image/banglore wallpepar.avif',
        Date: '30.01.2024',
        CityName: 'Bangalore',
        CityDescription: 'Bangalore or Bengaluru, the capital of Karnataka, may be more famous as a hub for the IT sector, but it is also a gem of a tourist destination. The bustling metropolis beckons vacationers primarily with its scenic, lush green spaces that have earned it the nickname,Garden City.'
    },
    {
        backgroundImg: 'image/agra wallpepar.avif',
        Date: '11.02.2024',
        CityName: 'agra',
        CityDescription: 'Agra is a city in northern India s Uttar Pradesh state, home to one of the Seven Wonders of the World, the Taj Mahal. Although Taj is the primary reason people come to visit Agra, there are other sights worth seeing in Agra. Conveniently, these are all near the Taj Mahal and can be seen in one day.'
    },
    {
        backgroundImg: 'image/shrinagars wallpepar.avif',
        Date: '15.02.2024',
        CityName: 'Shrinagar',
        CityDescription: 'Famously known as Heaven on Earth, Srinagar is located in the union territory of Jammu & Kashmir, on the banks of river Jhelum. Srinagar is known for the stationary houseboats and gondola-type rowboats- Shikaras on Dal Lake. Adorned with tranquil Dal Lake & Nigeen Lake, Srinagar is the dream destination for honeymoon and family holidays.'
    },
    {
        backgroundImg: 'image/goa wallpepar.avif',
        Date: '20.02.2024',
        CityName: 'Goa',
        CityDescription: 'The state of Goa, in India, is famous for its beaches and places of worship. Tourism is its primary industry, and is generally focused on the coastal areas of Goa, with decreased tourist activity inland.'
    },
]

let curentSectionIndex = 0

function UpdateCount() {
    const curentSection = sectionData[curentSectionIndex]
    backgroundImg.src = curentSection.backgroundImg
    Date.textContent = curentSection.Date
    CityName.textContent = curentSection.CityName
    CityDescription.textContent = curentSection.CityDescription
}

document.getElementById('nextclick').addEventListener('click', function () {
    curentSectionIndex = (curentSectionIndex + 1) % sectionData.length
    UpdateCount()
})
document.getElementById('prevclick').addEventListener('click', function () {
    curentSectionIndex = (curentSectionIndex - 1 + sectionData.length) % sectionData.length
    UpdateCount()
})
UpdateCount()

let currentIndex = 0
const Slide = document.getElementById('slider')
const totalSlider = document.querySelectorAll('.slide-image').length

function nextslide() {
    currentIndex = (currentIndex + 1) % totalSlider
    updateSlider()
}

function updateSlider() {
    const translatevalue = -currentIndex * 22 + '%';
    Slide.style.transform = 'translateX(' + translatevalue + ')'

}
setInterval(nextslide, 1000)

const upcomingtoursimage = document.getElementById('tours-change-image').querySelector('img')
const toursdate = document.querySelector('.change-date')
const toursdiscription = document.querySelector('.change-discription')
const ToursCityName = document.querySelector('.change-cityname')
const INRbtn = document.getElementById('INR-btn')
// const ToursInfo = document.getElementById('Tours-Info')

let ToursData = [
    {
        upcomingtoursimage: 'turist_Image/mumbai.avif',
        toursdate: '02.01.2024 - 08.01.2024',
        toursdiscription: 'Mumbai offers an array of both historical and cultural sites to both Indian and foreign tourists. The Gateway of India is a one of the most iconic structures in Mumbai.',
        ToursCityName: 'mumbai',
        INRbtn: '9,400₹',
    },
    {
        upcomingtoursimage: 'turist_Image/pune.avif',
        toursdate: '10.01.2024 - 18.01.2024',
        toursdiscription: 'Pune is famous for its stunning wildlife, including rare, endangered, and near-extinct plant and animal species.',
        ToursCityName: 'pune',
        INRbtn: '5,100₹',
    },
    {
        upcomingtoursimage: 'turist_Image/delhi.avif',
        toursdate: '20.01.2024 - 28.01.2024',
        toursdiscription: 'Delhi is of great historical significance as an important commercial, transport, and cultural hub, as well as the political centre of India',
        ToursCityName: 'Delhi',
        INRbtn: '10,700₹',
    },
    {
        upcomingtoursimage: 'turist_Image/agra.avif',
        toursdate: '30.01.2024 - 06.02.2024',
        toursdiscription: 'Agra is best known for the A complex mausoleum, the Taj Mahal is often considered to be the world s best example of Mughal architecture.',
        ToursCityName: 'Agra',
        INRbtn: '8,500₹',
    },
    {
        upcomingtoursimage: 'turist_Image/shirdi.avif',
        toursdate: '08.02.2024 - 16.02.2024',
        toursdiscription: 'The Shri Saibaba Sansthan Trust located in Shirdi is one of the richest temple organisations. One of the most famous pilgrim centres of India, Shirdi is where Shri Sai Baba.',
        ToursCityName: 'Shirdi',
        INRbtn: '7,780₹',
    }
]

let toursSectionData = 0

function toursUpdate() {
    const currentTours = ToursData[toursSectionData]
    upcomingtoursimage.src = currentTours.upcomingtoursimage
    toursdate.textContent = currentTours.toursdate
    toursdiscription.textContent = currentTours.toursdiscription
    ToursCityName.textContent = currentTours.ToursCityName
    INRbtn.textContent = currentTours.INRbtn
}
document.getElementById('nextbtn').addEventListener('click', function () {
    toursSectionData = (toursSectionData + 1) % ToursData.length
    toursUpdate()
})
toursUpdate()

let testim = document.getElementById("testim"),
    testimDots = Array.prototype.slice.call(document.getElementById("testim-dots").children),
    testimContent = Array.prototype.slice.call(document.getElementById("testim-content").children),
    testimleftArrow = document.getElementById("left-arrow"),
    testimRightArrow = document.getElementById("right-arrow"),
    testimSpeed = 4500,
    currentSlide = 0,
    currentActive = 0,
    testimTimer
    ;

//   reviews script
window.onload = function () {
    function playSlide(slide) {
        for (let k = 0; k < testimDots.length; k++) {
            testimContent[k].classList.remove("active");
            testimContent[k].classList.remove("inactive");
            testimDots[k].classList.remove("active");
        }
        if (slide < 0) {
            slide = currentSlide = testimContent.length - 1;
        }
        if (slide > testimContent.length - 1) {
            slide = currentSlide = 0;
        }
        if (currentActive != currentSlide) {
            testimContent[currentActive].classList.add("inactive");
        }
        testimContent[slide].classList.add("active");
        testimDots[slide].classList.add("active");

        currentActive = currentSlide;

        clearTimeout(testimTimer);
        testimTimer = setTimeout(function () {
            playSlide(currentSlide += 1);
        }, testimSpeed)
    }

    testimleftArrow.addEventListener("click", function () {
        playSlide(currentSlide -= 1);
    })
    testimRightArrow.addEventListener("click", function () {
        playSlide(currentSlide += 1);
    })

    for (let l = 0; l < testimDots.length; l++) {
        testimDots[l].addEventListener("click", function () {
            playSlide(currentSlide = testimDots.indexOf(this));
        })
    }
    playSlide(currentSlide);
}

const AboutUs = document.getElementById('about')
const paragraphbox = document.querySelector('.why-us-text')
const Trip = document.getElementById('trip')
const upcomingtours = document.querySelector('.upcoming-tours')
const Reviews = document.getElementById('reviews')
const reviews = document.querySelector('.Reviews')
const Question = document.getElementById('question')
const queheading = document.querySelector('.que-heading')
const Contact = document.getElementById('contact')
const socialmediaicon = document.querySelector('.social-media-icon')

AboutUs.addEventListener('click', function () {
    paragraphbox.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" })
})
Trip.addEventListener('click', function () {
    upcomingtours.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" })
})
Reviews.addEventListener('click', function () {
    reviews.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" })
})
Question.addEventListener('click', function () {
    queheading.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" })
})
Contact.addEventListener('click', function () {
    socialmediaicon.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" })
})