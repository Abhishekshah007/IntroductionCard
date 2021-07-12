// local reviews data
const reviews = [
    {
      id: 1,
      name: "Faqir Chand Kohli",
      job: "Father of IT of India",
      img:
        "./img/fc-kohli.jpg",
      text:
        "Faqir Chand Kohli was founder and first CEO of TCS Tata Consultancy Services, India's largest Software Services Co.",
    },
    {
      id: 2,
      name: "Mohandas Karamchand Gandhi",
      job: "Father of India",
      img:
        "./img/mkg.jpg",
      text:
        "Mahatma Gandhi was the leader of India's non-violent independence movement against British rule and in South Africa who advocated for the civil rights of Indians.",
    },
    {
      id: 3,
      name: "Swami Vivekanandana",
      job: "Indian monk",
      img:
        "./img/swamivivekanandan.png",
      text:
       "He was a chief disciple of the 19th-century Indian mystic Ramakrishna",
    },
    {
      id: 4,
      name: "APJ Abdul Kalam ",
      job: "Former President of India",
      img:
        "./img/apj.jpg",
      text:
        "Avul Pakir Jainulabdeen Abdul Kalam was an Indian aerospace scientist who served as the 11th President of India from 2002 to 2007. ",
    },
    {
        id: 5,
        name: "Mahendra Singh Dhoni",
        job: "Former Indian Captain",
        img:
          "./img/msd.jpg",
        text:
          "Mahendra Singh Dhoni, is a former Indian international cricketer who captained the Indian national team in limited-overs formats from 2007 to 2017 and in Test cricket from 2008 to 2014. ",
      },
  ];
  // select items
  const img = document.getElementById("person-img");
  const author = document.getElementById("author");
  const job = document.getElementById("job");
  const info = document.getElementById("info");
  const contain =  document.getElementsByClassName("container");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const randomBtn = document.querySelector(".random-btn");
  
  // set starting item
  let currentItem = 0;
  
  // load initial item
  window.addEventListener("DOMContentLoaded", () => {
    const item = reviews[currentItem];
    console.log(item);
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  });
  
  // show person based on item
 showPerson = (person) => {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  }
  // show next person
  nextBtn.addEventListener("click", () =>  {
    currentItem++;
    if (currentItem > reviews.length - 1) {
      currentItem = 0;
    }
    showPerson(currentItem);
  });
  // show prev person
  prevBtn.addEventListener("click", () => {
    currentItem--;
    if (currentItem < 0) {
      currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
  });
  // show random person
  randomBtn.addEventListener("click", () => {
    
  
    currentItem = Math.floor(Math.random() * reviews.length);
   
    showPerson(currentItem);
  });