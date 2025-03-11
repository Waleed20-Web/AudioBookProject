document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript is working!"); // تأكد أن JavaScript يعمل
    const audioList = document.querySelector(".audio-list");

    for (let i = 1; i <= 60; i++) {
        const audioItem = document.createElement("div");
        audioItem.classList.add("audio-item");

        // اسم الملف
        const pistaText = document.createElement("span");
        pistaText.textContent = `Pista ${i}`;

        // عنصر الصوت
        const audio = document.createElement("audio");
        audio.controls = true;
        audio.src =` audio/Pista${i}.mp3`;

        // تأكد أن الصوتيات موجودة فعليًا
        console.log(`Trying to load: ${audio.src}`);

        // علامة الصح
        const checkmark = document.createElement("span");
        checkmark.classList.add("checkmark");
        checkmark.innerHTML = "✔";

        // عند انتهاء التشغيل، تظهر علامة الصح
        audio.addEventListener("ended", function () {
            checkmark.classList.add("show-checkmark");
        });

        // إضافة العناصر إلى الصفحة
        audioItem.appendChild(pistaText);
        audioItem.appendChild(audio);
        audioItem.appendChild(checkmark);
        audioList.appendChild(audioItem);
    }
});