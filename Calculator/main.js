function addNo(num) {
    let ans = document.getElementById('ans');
    ans.innerHTML += num;
  }

  function clearAns() {
    let ans = document.getElementById('ans');
    ans.innerHTML = "";
  }

  function backAns() {
    let ans = document.getElementById('ans');
    ans.innerHTML = ans.innerHTML.slice(0, -1);
  }

  function displayAns() {
    let ans = document.getElementById('ans');
    try {
      ans.innerHTML = eval(ans.innerHTML);
    } catch (e) {
      ans.innerHTML = "Error";
    }
  }