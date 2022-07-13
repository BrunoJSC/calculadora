function calculator() {
  const display = document.querySelector(".display");

  document.addEventListener("click", (e) => {
    const el = e.target;

    if (el.classList.contains("btn-num")) {
      btnForDisplay(el.innerText);
    }

    if (el.classList.contains("btn-delete")) {
      btnDelete();
    }

    if (el.classList.contains("btn-clear")) {
      display.value = " ";
    }

    if (el.classList.contains("btn-equal")) {
      equal();
    }

    function btnForDisplay(value) {
      display.value += value;
    }

    function btnDelete() {
      display.value = display.value.slice(0, -1);
    }

    function equal() {
      let calc = display.value;

      try {
        calc = eval(calc);

        if (!calc) {
          alert("error calc");
        }

        display.value = calc;
      } catch (e) {
        alert("error calc");
      }
    }
  });
}

calculator();
