const handleGenerateAvatar = () => {
            gender = document.querySelector("input[name=gender]:checked").id
            name = document.querySelector("#name").value.trim()
            img = document.querySelector(".avatarImg")
            if (name && gender) {
                imgUrl = `https://avatar.iran.liara.run/public/${gender}?username=${name}`;
                img.src = imgUrl;
                img.hidden = false;
            } else {
                alert("Please enter name and select gender.");
                img.hidden = true;
            }
        }