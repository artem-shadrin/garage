const auth = () => {
    const correctPhone = () => {
        const containerEl = document.querySelector('.auth__content');
        const phoneEl = document.getElementById('form-login');
        const phoneValueEl = document.getElementById('login__phone');
        const phoneBtnEl = document.getElementById('login__submit');
        let old = null;
        phoneValueEl.onclick = function (e) {
            if (phoneValueEl?.value.length <= 0) {
                phoneValueEl.value = "+7"
            }
        }
        phoneEl.oninput = function (e) {
            var curLen = phoneValueEl.value.length;

            if (curLen < old) {
                old--;
                return;
            }

            if (curLen == 2)
                phoneValueEl.value = phoneValueEl.value + "(";

            if (curLen == 6)
                phoneValueEl.value = phoneValueEl.value + ")-";

            if (curLen == 11)
                phoneValueEl.value = phoneValueEl.value + "-";

            if (curLen == 14)
                phoneValueEl.value = phoneValueEl.value + "-";

            if (curLen > 17) {

                phoneValueEl.value = phoneValueEl.value.substring(0, phoneValueEl.value.length - 1);
            }

            if (phoneValueEl.value.length === 17) {
                phoneBtnEl.disabled = false;
            } else {
                phoneBtnEl.disabled = true;
            }


            old++;
        }
        phoneEl.onsubmit = function (e) {
            e.preventDefault()
            const phone = phoneValueEl.value.replace(/\-|\(|\)|\+/g, '');
            console.log(phone);
            containerEl?.classList.add('auth__content--sms-code');
        }
    }
    correctPhone()
}
export default auth;