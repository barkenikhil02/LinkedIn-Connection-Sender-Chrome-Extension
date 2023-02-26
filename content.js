//const connectionButtons = document.querySelectorAll('button[data-control-name="srp_profile_actions"]');
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function sendConnectionRequests() {
  // debugger;
  function Sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  var count = 0;
  const connectBtns = Array.from(
    document.querySelectorAll("button span")
  ).filter((el) => el.innerText === "Connect").map(el => el.parentElement);
  for (const btn of connectBtns) {
    await Sleep(1000);
    btn.click();
    await Sleep(1000);
    document.querySelector('button[aria-label="Send now"]')?.click();
    count = count + 1;
    console.log(count)
    if(count > 20){
      break;
    }
  }

}

(async () => {
  await sendConnectionRequests();
})();