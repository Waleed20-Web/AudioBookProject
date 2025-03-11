document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript is working!"); // تأكد أن JavaScript يعمل
    const audioList = document.querySelector(".audio-list");

// قايمة اللينكات من Google Drive (غيّري الـ IDs بتاعتك هنا)
    const audioLinks = [
        "https://drive.google.com/file/d/1oem1NoKiwfsLzQXIOl57dNUN_GCDnsx2/view?usp=drive_link", // Pista1
        "https://drive.google.com/file/d/1w11zy_mfbbfGkAv1fx71W9LsM9NeaO3U/view?usp=drive_link", // Pista2
        "https://drive.google.com/file/d/1xVPa0iHc_veBfF3daABHwCKAW1Jj3v1q/view?usp=drive_link", // Pista3
        "https://drive.google.com/file/d/11tUKACUVYeOU7PfZfbVEnEX_eZWjCzur/view?usp=drive_link", // Pista4
        "https://drive.google.com/file/d/1IWoYESTHCSdz17UMLDY-gKmFKLgwQf8W/view?usp=drive_link", // Pista5
        "https://drive.google.com/file/d/1Ry3ozbUhJZCg_sG3NFPjMuXwHPV6v-wD/view?usp=drive_link", // Pista6
        "https://drive.google.com/file/d/1G6NVGgOmxecoNLtNd2xNFpECT0IQwl8X/view?usp=drive_link", // Pista7
        "https://drive.google.com/file/d/194uSZlinXg6_osu9HXOYwpFZK5pEAi0B/view?usp=drive_link", // Pista8
        "https://drive.google.com/file/d/11rubYjL2uI76ndCBEXgFhHwAbG9kOv5M/view?usp=drive_link", // Pista9
        "https://drive.google.com/file/d/1z-cLZ5i0qgSUQZaRQWdU_8DvKEawatDH/view?usp=drive_link", // Pista10
        "https://drive.google.com/file/d/16xY0uzmjkbhwGOH2FS6YBkKFsuvPKAw7/view?usp=drive_link", // Pista11
        "https://drive.google.com/file/d/1B-ndS01u9MHlrx4vcyOqxvq6ilwcsikA/view?usp=drive_link", // Pista12
        "https://drive.google.com/file/d/1WVi-BwusiYm3O459xYnXSTI4y3cryQ3t/view?usp=drive_link", // Pista13
        "https://drive.google.com/file/d/1EDSlkL7m4bf7J2UJez0pGgoEXGhavpUN/view?usp=drive_link", // Pista14
        "https://drive.google.com/file/d/1IhNtRrguCwCZe3gKQ-WX-KxE_l2Ie827/view?usp=drive_link", // Pista15
        "https://drive.google.com/file/d/1R9BTnZ16wv9Urj5ItiTR52OOyfhPgQb5/view?usp=drive_link", // Pista16
        "https://drive.google.com/file/d/1hDiYBgYcuQKyRskSxkuyojbuOGeFU9uv/view?usp=drive_link", // Pista17
        "https://drive.google.com/file/d/1yrmzH4oolFCLM_E_vjr0XWMupXS_G8RW/view?usp=drive_link", // Pista18
        "https://drive.google.com/file/d/1SVGFnusPEFdYG_SjVg-hU_V2w0So7KmK/view?usp=drive_link", // Pista19
        "https://drive.google.com/file/d/1BLHalWvxUrI8FsEtayyB6D3O-jAwzee5/view?usp=drive_link", // Pista20
        "https://drive.google.com/file/d/1qYlpKMAjwNx4I3ZCWED952e0scfLbT_3/view?usp=drive_link", // Pista21
        "https://drive.google.com/file/d/1_z10JqDSO1jtvO8ZBVLkp7PnpAeQXn7O/view?usp=drive_link", // Pista22
        "https://drive.google.com/file/d/1WugGYJc5jdh1Z5_bhtzUUhb1zt7a1DAU/view?usp=drive_link", // Pista23
        "https://drive.google.com/file/d/1eHeadPuIB8NSH67CYHo8KuQXYQXdI5P-/view?usp=drive_link", // Pista24
        "https://drive.google.com/file/d/1rPcaH3m58pJKza6pkOyDWm5eoEuo7rbh/view?usp=drive_link", // Pista25
        "https://drive.google.com/file/d/1Rn--hWvx3SEJcHW6yskZuk7y9eDVBu8D/view?usp=drive_link", // Pista26
        "https://drive.google.com/file/d/13wiKQY9D92TeJUMre20C7WHr-pwMUfPe/view?usp=drive_link", // Pista27
        "https://drive.google.com/file/d/1TUL27YS3H_1kJrUvFHMPdOCQ4Rwwidvz/view?usp=drive_link", // Pista28
        "https://drive.google.com/file/d/1MXzVjl2aPZJQFYEJEex4rUyeVEvgsh7A/view?usp=drive_link", // Pista29
        "https://drive.google.com/file/d/1K64Lj2oNo24cjQ-UPAQE_XPTRie5PN7J/view?usp=drive_link", // Pista30
        "https://drive.google.com/file/d/1EvBitkcqTkPykIFgsIT6GtWPxrgb5-Sx/view?usp=drive_link", // Pista31
        "https://drive.google.com/file/d/16_joyfs9Txn2Gdfsvxx8ws2_mHToshO9/view?usp=drive_link", // Pista32
        "https://drive.google.com/file/d/14FTjga8pBfya1WRKY9DCuYUOvpjhKB2I/view?usp=drive_link", // Pista33
        "https://drive.google.com/file/d/1D6okGFGQXl-0Zs6sOtf8RWBr9CUfJwnl/view?usp=drive_link", // Pista34
        "https://drive.google.com/file/d/1--juRvmIUkG_lTxu3Zs8ATogFkTgpngq/view?usp=drive_link", // Pista35
        "https://drive.google.com/file/d/1rOE6WRY66e4PVi2j1kbQigAT2kT7xO7f/view?usp=drive_link", // Pista36
        "https://drive.google.com/file/d/1bhsvjX05YNMDLTig99X8DdcmH31qZepI/view?usp=drive_link", // Pista37
        "https://drive.google.com/file/d/1rb8DFMSpAXoxXaJxfEqQmimiuUfdr1xj/view?usp=drive_link", // Pista38
        "https://drive.google.com/file/d/1u3Pywo79Pu6xLmjC58LVJnfligN1SJbw/view?usp=drive_link", // Pista39
        "https://drive.google.com/file/d/1F1BPciZ50-etiEVLDWuLfE-zqM8MgwoY/view?usp=drive_link", // Pista40
        "https://drive.google.com/file/d/1ow9zaDDX-itkjudmHB_7y86xLcslEvUd/view?usp=drive_link", // Pista41
        "https://drive.google.com/file/d/1bx6RCCW-xbT4sZRXGVczbCGQjnu9idGt/view?usp=drive_link", // Pista42
        "https://drive.google.com/file/d/1r7JAxb5pT1TuSf7c4WBMstgUfe1DgRfT/view?usp=drive_link", // Pista43
        "https://drive.google.com/file/d/1jazei1CUhlhH6FDyZ4R5gXsjycIhxdqd/view?usp=drive_link", // Pista44
        "https://drive.google.com/file/d/1lZutr9wb0AXZMAozSQBxVkPA_PcV1kyY/view?usp=drive_link", // Pista45
        "https://drive.google.com/file/d/1siPUJo66UBkXYuiCbsNNuDeK5qYCnlJD/view?usp=drive_link", // Pista46
        "https://drive.google.com/file/d/1O5ZYS8NmVwewOpACVZqu86zaBWwgdRXx/view?usp=drive_link", // Pista47
        "https://drive.google.com/file/d/1SzefaJS2y4DjbP2aT2_qUozW2EaLLhdm/view?usp=drive_link", // Pista48
        "https://drive.google.com/file/d/1MpbpvpFrZxXPsJiILS9vztJOGjnwfqNG/view?usp=drive_link", // Pista49
        "https://drive.google.com/file/d/1mb2lW-GiW5QwBqReEs6D1_X1jLDlt9lz/view?usp=drive_link", // Pista50
        "https://drive.google.com/file/d/1D_HsLG_rSlK9lBnj3lQUMcXkmra5Lv17/view?usp=drive_link", // Pista51
        "https://drive.google.com/file/d/1INo2rukv9KTGL-5MB5tvUuKymqHxF5An/view?usp=drive_link", // Pista52
        "https://drive.google.com/file/d/1s7J2vVMnWxyTbe8cDEvjfGeZiWfnoNPn/view?usp=drive_link", // Pista53
        "https://drive.google.com/file/d/1DDgzuCZgoPwrf0J4ipp1slkl3xpHYp-k/view?usp=drive_link", // Pista54
        "https://drive.google.com/file/d/1YTyXmKji7zAxzbDWnNN14S3vPvzx6a9w/view?usp=drive_link", // Pista55
        "https://drive.google.com/file/d/1U1sFAp0TU-ZR45YSWbucPG8F911YeNZf/view?usp=drive_link", // Pista56
        "https://drive.google.com/file/d/1a1sqytmgKY0C0hmKOu2ankYNMNC_ORm4/view?usp=drive_link", // Pista57
        "https://drive.google.com/file/d/1Nibn8JypPGqJ9noZwF4mp8rISyMlyz54/view?usp=drive_link", // Pista58
        "https://drive.google.com/file/d/19aX6MzebVT1G8V5C3DIPzi10V4H-gJ8U/view?usp=drive_link", // Pista59
        "https://drive.google.com/file/d/1P67M2r43FO8WPsuL1DcWNN18KQUrPwWM/view?usp=drive_link", // Pista60
    ];

    
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
