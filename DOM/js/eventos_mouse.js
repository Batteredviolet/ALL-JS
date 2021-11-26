const clearBtn = document.querySelector(".clear-tasks");
const card = document.querySelector(".card");
const heading = document.querySelector("h5");

// clearBtn.addEventListener('click', runEvent)
// clearBtn.addEventListener('dblclick', runEvent)
// clearBtn.addEventListener('mousedown', runEvent)
// clearBtn.addEventListener('mouseup', runEvent)
// clearBtn.addEventListener('mouseenter', runEvent)
// clearBtn.addEventListener('mouseleave', runEvent)
// clearBtn.addEventListener('mouseover', runEvent)
// clearBtn.addEventListener('mouseout', runEvent)

card.addEventListener("mousemove", runEvent);
function runEvent(event) {
  console.log("Tipo de evento " + event.type);

//   heading.textContent = "mouseX: " + event.clientX + " mouseY " + event.clientY;
  heading.textContent = "mouseX: " + event.offsetX + " mouseY " + event.offsetY;

  document.body.style.backgroundColor = `rgb(${event.offsetX}, ${event.offsetY}, 40)`
  event.preventDefault();
}
