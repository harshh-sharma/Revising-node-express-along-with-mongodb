addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const image = document.getElementById("image").value;
  if (!name || !email || !image) {
    alert("All fields are required");
  } else {
    const response = await fetch("http://localhost:3000/create", {
      method: "POST",
      body: JSON.stringify({
        name,
        email,
        image,
      }),
      headers: {
        "content-type": "application/json",
      },
    });
  }
});

addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const image = document.getElementById("image").value;
  const response = await fetch("http://localhost:3000/update", {
    method: "POST",
    body: JSON.stringify({
      name,
      email,
      image,
    }),
    headers: {
      "content-type": "application/json",
    },
  });
});
