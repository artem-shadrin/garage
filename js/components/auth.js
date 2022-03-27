const auth = (containerEl) => {
  const loginEl = document.querySelector(".login");
  const registrationEl = document.querySelector(".registration");
  const correctCode = (code) => {
    console.log(code);
    setTimeout(() => {
      window.location.href = window.location.href.replace(
        "/authentification",
        "/home"
      );
    }, 500);
  };
  const checkCode = (phone) => {
    const smsFormEl = document.querySelector(".sms-code__form");

    const smsSubtitle = document.querySelector(".sms-code__tel");
    smsSubtitle.textContent = phone.replace(/\d\d\-\d\d$/g, "**-**");

    const clearPhone = phone.replace(/\-|\(|\)|\+/g, "");
    containerEl?.classList.add("auth__content--sms-code");
    smsFormEl.addEventListener("sumbit", (e) => {
      console.log(e);
      e.preventDefault();
    });
    let code = "";
    smsFormEl.oninput = (e) => {
      if (e.target.value.length >= 1) {
        if (e.target.id !== "sms-code-6") {
          document
            .getElementById(
              e.target.id.replace(/\d+$/, function (n) {
                return ++n;
              })
            )
            .focus();
        } else {
          smsFormEl.querySelectorAll("input").forEach((item) => {
            code += item.value;
          });
          correctCode(code);
        }
      }
    };
  };
  const login = () => {
    const loginPhoneEl = document.getElementById("form-login");
    const loginPhoneValueEl = document.getElementById("login__phone");
    const loginPhoneBtnEl = document.getElementById("login__submit");
    const linkRegistration = document.getElementById("link__registration");
    let old = null;
    loginPhoneValueEl.onclick = function (e) {
      if (loginPhoneValueEl?.value.length <= 0) {
        loginPhoneValueEl.value = "+7";
      }
    };
    loginPhoneEl.oninput = function (e) {
      var curLen = loginPhoneValueEl.value.length;

      if (curLen < old) {
        old--;
        return;
      }

      if (curLen == 3 && /\d$/.test(loginPhoneValueEl.value)) {
        let a = loginPhoneValueEl.value.split("");
        a.splice(2, 0, "(");
        a = a.join("");
        loginPhoneValueEl.value = a;
      }

      if (curLen == 6) {
        loginPhoneValueEl.value = loginPhoneValueEl.value + ")-";
      }

      if (curLen == 11) {
        loginPhoneValueEl.value = loginPhoneValueEl.value + "-";
      }

      if (curLen == 14) {
        loginPhoneValueEl.value = loginPhoneValueEl.value + "-";
      }

      if (curLen > 17) {
        loginPhoneValueEl.value = loginPhoneValueEl.value.substring(
          0,
          loginPhoneValueEl.value.length - 1
        );
      }

      if (loginPhoneValueEl.value.length === 17) {
        loginPhoneBtnEl.disabled = false;
      } else {
        loginPhoneBtnEl.disabled = true;
      }

      old++;
    };
    loginPhoneEl.onsubmit = function (e) {
      e.preventDefault();
      checkCode(loginPhoneValueEl.value);
    };
    linkRegistration.addEventListener("click", (e) => {
      e.preventDefault();
      registration();
    });
  };
  const registration = () => {
    loginEl.classList.toggle("is-hidden");
    registrationEl.classList.toggle("is-hidden");

    const registrationFormEl = document.getElementById("form-registration");
    const registrationPhoneValueEl = document.getElementById(
      "registration__phone"
    );
    const registrationPhoneBtnEl = document.getElementById(
      "registration__submit"
    );
    let old = null;
    registrationPhoneValueEl.onclick = function (e) {
      if (registrationPhoneValueEl?.value.length <= 0) {
        registrationPhoneValueEl.value = "+7(";
      }
    };
    registrationFormEl.oninput = function (e) {
      var curLen = registrationPhoneValueEl.value.length;

      if (curLen < old) {
        old--;
        return;
      }

      if (curLen == 3 && /\d$/.test(registrationPhoneValueEl.value)) {
        let a = registrationPhoneValueEl.value.split("");
        a.splice(2, 0, "(");
        a = a.join("");
        registrationPhoneValueEl.value = a;
      }

      if (curLen == 6) {
        registrationPhoneValueEl.value = registrationPhoneValueEl.value + ")-";
      }

      if (curLen == 11) {
        registrationPhoneValueEl.value = registrationPhoneValueEl.value + "-";
      }

      if (curLen == 14) {
        registrationPhoneValueEl.value = registrationPhoneValueEl.value + "-";
      }

      if (curLen > 17) {
        registrationPhoneValueEl.value =
          registrationPhoneValueEl.value.substring(
            0,
            registrationPhoneValueEl.value.length - 1
          );
      }

      if (registrationPhoneValueEl.value.length === 17) {
        registrationPhoneBtnEl.disabled = false;
      } else {
        registrationPhoneBtnEl.disabled = true;
      }

      old++;
    };
    registrationFormEl.onsubmit = function (e) {
      e.preventDefault();
      checkCode(registrationPhoneValueEl.value);
    };
  };
  login();
};

const containerEl = document.querySelector(".auth__content");
const loginEl = document.querySelector(".login");
const registartionEl = document.querySelector(".registration");
const navBack = () => {
  const resetForm = () => {
    containerEl.querySelectorAll("form").forEach((form) => form.reset());
  };
  resetForm();
  containerEl.className = "auth__content";
  loginEl.classList.remove("is-hidden");
  registartionEl.classList.add("is-hidden");
};
//  btn Back
document
  .querySelectorAll(".auth__back-button")
  .forEach((btn) => btn.addEventListener("click", navBack));
auth(containerEl);
export default auth;
