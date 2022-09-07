export function userConnected(content) {
  return `
              <div class="footer__wrapper">
                  <div class="name">
                      ${content}
                  </div>
                  <input type="text" class="input__message" name="message" placeholder="insert your message">
                  <button type="submit" class="btn btn-sec">send</button>
              </div>
              `;
}

export function userNoneConnected() {
  return `
              <div class="enter-name__form">
                  <form action="" name="form" class="enter-name">
                  <label for="name" class="input-name__text">Enter user name</label>
                      <input type="text" name="name" class="input__name">
                     
                      <button type="submit" class="btn">send user name</button>
                  </form>
              </div>
              `;
}

export function time() {
  let today = new Date();
  return today.toLocaleString();
}

export function generateOnlineStats(userOnline) {
  return `<div class="online">users now online:${userOnline}</div>`;
}
