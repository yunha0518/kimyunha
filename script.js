const worksData = {
  prayer: {
    images: [
      "images/prayer1.jpg",
      "images/prayer2.jpg",
      "images/prayer3.jpg",
      "images/prayer4.jpg"
    ],
    description: `
      <p>Prayer for a Daughter, 2025</p>
      <p>Single-channel video, color, sound</p>
      <p>9 min 24 sec</p>
      <p>
        Full video available upon request
        (<a href="contact.html">Contact</a>)
      </p>
    `
  },

  detachment: {
    images: [
      "images/detachment.jpg"
    ],
    description: `
      <p>Detachment, 2025</p>
      <p>Single-channel video</p>
    `
  },

  thepillars: {
    images: [
      "images/ThePillars1.jpg",
      "images/ThePillars2.jpg",
      "images/ThePillars3.jpg"
    ],
    description: `
      <p>The Pillars, 2025</p>
      <p>Single-channel video</p>
    `
  },

  inthecurrent: {
    images: [
      "images/IntheCurrent1.jpg",
      "images/IntheCurrent2.jpg",
      "images/IntheCurrent3.jpg",
      "images/IntheCurrent4.jpg"
    ],
    description: `
      <p>In the Current, 2025</p>
      <p>Single-channel video</p>
    `
  },

  iamliving: {
    images: [
      "images/IamLiving.jpg",
      "images/IamLiving_Installation.png"
    ],
    description: `
      <p>I am Living, 2025</p>
      <p>Single-channel video / installation</p>
    `
  },

  unseparated: {
    images: [
      "images/Unseparated1.jpg",
      "images/Unseparated2.jpg",
      "images/Unseparated3.jpg",
      "images/Unseparated4.jpg"
    ],
    description: `
      <p>Unseparated, 2022</p>
      <p>Single-channel video</p>
    `
  },

  dysphoria: {
    images: [
      "images/Dysphoria1.jpg",
      "images/Dysphoria2.jpg",
      "images/Dysphoria3.jpg",
      "images/Dysphoria4.jpg"
    ],
    description: `
      <p>Dysphoria, 2022</p>
      <p>Single-channel video</p>
    `
  },

  changeofstate: {
    images: [
      "images/changeofstate.jpg"
    ],
    description: `
      <p>Change of State, 2022</p>
      <p>Single-channel video</p>
    `
  },

  angiocarpous: {
    images: [
      "images/angiocarpous1.jpg",
      "images/angiocarpous2.jpg",
      "images/angiocarpous3.jpg"
    ],
    description: `
      <p>Angiocarpous, 2022</p>
      <p>Single-channel video</p>
    `
  }
};

function showWork(workKey, clickedElement) {
  const work = worksData[workKey];
  const worksImage = document.getElementById("works_image");
  const worksDescription = document.getElementById("works_description");

  if (!work || !worksImage || !worksDescription) return;

  worksImage.innerHTML = "";
  work.images.forEach((src) => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = workKey;
    worksImage.appendChild(img);
  });

  worksDescription.innerHTML = work.description;

  document.querySelectorAll(".work_item").forEach((item) => {
    item.classList.remove("active_work");
  });

  if (clickedElement) {
    clickedElement.classList.add("active_work");
  }
}
