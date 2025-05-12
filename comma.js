const input = document.querySelector(".input-field");
const output = document.getElementById("output");
const copyBtn = document.getElementById("copy-btn");
const clearBtn = document.getElementById("clear-btn");

document.getElementById("cleanup").addEventListener("click", () => {
    const numberMatches = input.value.match(/\d{6,}/g);

    const result = numberMatches ? numberMatches.join(",") : "";
    output.textContent = result;

    if (result) {
        copyBtn.style.display = "inline-block";
        clearBtn.style.display = "inline-block";
    } else {
        copyBtn.style.display = "none";
    }
});

copyBtn.addEventListener("click", () => {
    const text = output.textContent;
    navigator.clipboard.writeText(text)
        .then(() => alert("Copied!"))
        .catch(err => alert("Failed to copy: " + err));
});

clearBtn.addEventListener("click", () => {
    output.textContent = "";
    input.value = "";
});