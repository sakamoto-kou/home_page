(() => {
  "use strict";

  const switchLink = document.querySelector("#language-switch");
  const showEnglish = new URLSearchParams(location.search).get("lang") === "en";

  function updateSwitchLink() {
    const destination = new URL(location.href);
    if (showEnglish) {
      destination.searchParams.delete("lang");
    } else {
      destination.searchParams.set("lang", "en");
    }
    switchLink.href = destination.href;
  }

  if (showEnglish) {
    renderEnglish();
    switchLink.textContent = "日本語";
    switchLink.lang = "ja";
    switchLink.hreflang = "ja";
  }

  updateSwitchLink();
  window.addEventListener("hashchange", updateSwitchLink);
  switchLink.hidden = false;

  function renderEnglish() {
    const romanName = document.querySelector(".profile-roman");
    const englishName = romanName.textContent.trim();
    const japaneseName = document.querySelector("#name").textContent.trim();

    // index.html の日本語と照合する英訳。未登録の文言は日本語のまま表示する。
    const translations = {
      [japaneseName]: englishName,
      "坂本 航 | 大阪大学 石川研究室": englishName + " | Ishikawa Laboratory, The University of Osaka",
      "大阪大学大学院 工学研究科 機械工学専攻・石川研究室に所属する坂本航のホームページ。略歴、業績、お問い合わせ先。":
        "Academic profile, publications, and contact information for Ko Sakamoto, a master's student in the Ishikawa Laboratory at The University of Osaka.",

      "本文へ移動": "Skip to content",
      "ページ内メニュー": "Page navigation",
      "略歴": "Biography",
      "業績": "Publications",
      "お問い合わせ": "Contact",
      "ページ先頭へ": "Back to top",

      "大阪大学大学院": "The University of Osaka",
      "博士前期課程": "Master's student",
      "／": "/",
      "工学研究科 機械工学専攻": "Division of Mechanical Engineering, Graduate School of Engineering",
      "機械動力学領域（": "Mechanical Dynamics Subarea (",
      "石川研究室": "Ishikawa Laboratory",
      "）": ")",
      "工学研究科 機械工学専攻 博士前期課程": "Master's Program in Mechanical Engineering, Graduate School of Engineering",
      "大阪大学": "The University of Osaka",
      "工学部 応用理工学科 機械工学コース": "Mechanical Engineering Course, Division of Applied Science, School of Engineering",
      "私立 桐朋高等学校": "Toho High School (private)",
      "普通科": "General Education Program",
      "〜現在": "–Present",
      "〜": "–",

      "職歴・研究歴": "Research and Teaching Experience",
      "工学研究科Innovation Bridge プロジェクト24 リサーチアシスタント（RA）":
        "Research Assistant (RA), Innovation Bridge Project 24, Graduate School of Engineering",
      "ティーチングアシスタント（TA）": "Teaching Assistant (TA)",
      "計算機とプログラミング": "Computing and Programming",
      "機械工学実験 II": "Mechanical Engineering Laboratory II",
      "機械創成工学実習 III": "Mechanical Engineering Design Practicum III",
      "制御工学演習・実験": "Control Engineering Exercises and Laboratory",
      "講座・資格": "Courses and Qualifications",
      "数理・DS・AI 教育プログラム(リテラシーレベル)": "Mathematics, Data Science, and AI Education Program (Literacy Level)",

      "学術論文": "Journal Articles",
      "解説・寄稿": "Review Articles and Contributions",
      "学会・研究会発表": "Conference and Workshop Presentations",
      "3Dプリンティングとロボットの身体性": "3D Printing and Robot Embodiment",
      "スマートプロセス学会誌 15巻6号": "Journal of Smart Processing, Vol. 15, No. 6",
      "リンク先は発行元の目次": "Publisher's table of contents",
      "筋紡錘模倣機構とマッキベン型人工筋を用いた動作支援装置の基礎的検討":
        "A Preliminary Study of a Motion Assistance Device Using a Muscle Spindle–Inspired Mechanism and McKibben Artificial Muscles",
      "錘内筋と錘外筋の相互作用に着目した空気圧拮抗駆動アームの角度制御手法":
        "Angle Control of a Pneumatically Actuated Antagonistic Arm Inspired by Intrafusal–Extrafusal Muscle Interactions",
      "錘内筋と錘外筋の相互作用に着目した空気圧拮抗駆動アームの角度制御法":
        "Angle Control of a Pneumatically Actuated Antagonistic Arm Inspired by Intrafusal–Extrafusal Muscle Interactions",
      "高振動数駆動に向けたBLDCモータとワイヤ–クランク機構を用いた魚型ロボット遊泳機構の試作":
        "Prototyping a Robotic Fish Swimming Mechanism for High-Frequency Actuation Using a BLDC Motor and a Wire–Crank Mechanism",
      "錘内筋の模倣による空気圧人工筋の筋長制御": "Length Control of a Pneumatic Artificial Muscle by Mimicking Intrafusal Muscle",
      "計測自動制御学会 システムインテグレーション部門講演会（SI2026） / 2E1-02（プログラムPDF）":
        "27th SICE System Integration Division Conference (SI2026) / 2E1-02 (program PDF)",
      "第22回ECSRA研究会": "22nd ECSRA Workshop",
      "第21回ECSRA研究会": "21st ECSRA Workshop",
      "ロボティクス・メカトロニクス講演会（ROBOMECH 2026） / 2P2-S01（プログラムPDF）":
        "Robotics and Mechatronics Conference (ROBOMECH 2026) / 2P2-S01 (program PDF)",
      "ロボティクス・メカトロニクス講演会（ROBOMECH 2026） / 1A1-P09（プログラムPDF）":
        "Robotics and Mechatronics Conference (ROBOMECH 2026) / 1A1-P09 (program PDF)",
      "ポスター発表": "Poster presentation",
      "大阪": "Osaka",
      "東京": "Tokyo",
      "福岡": "Fukuoka",
      "宮城": "Miyagi",

      "増田 容一": "Yoichi Masuda",
      "浅沼 奨太": "Shota Asanuma",
      "陶 斯遠": "Siyuan Tao",
      "石川 将人": "Masato Ishikawa",
      "中西 大輔": "Daisuke Nakanishi",
      "浪花 啓右": "Keisuke Naniwa",
      "杉本 靖博": "Yasuhiro Sugimoto",

      "メール": "Email",
      "研究室所在地": "Laboratory Address",
      "〒565-0871 大阪府吹田市山田丘2-1": "2-1 Yamadaoka, Suita, Osaka 565-0871, Japan",
      "大阪大学 吹田キャンパス M4棟5階（501〜505号室）":
        "Suita Campus, The University of Osaka, Building M4, 5th floor (Rooms 501–505)",
      "大学院工学研究科 機械工学専攻 石川研究室":
        "Ishikawa Laboratory, Division of Mechanical Engineering, Graduate School of Engineering",
      "石川研究室へのアクセス": "Directions to Ishikawa Laboratory",
      "吹田キャンパスマップ": "Suita Campus map",
    };

    const monthYear = new Intl.DateTimeFormat("en", {
      month: "long", year: "numeric", timeZone: "UTC",
    });

    function translate(phrase) {
      const key = phrase.replace(/\s+/g, " ");
      if (Object.hasOwn(translations, key)) {
        return translations[key];
      }

      const date = /^(\d{4})年(?:(1[0-2]|0?[1-9])月)?$/.exec(key);
      if (date) {
        const [, year, month] = date;
        return month ? monthYear.format(new Date(`${year}-${month.padStart(2, "0")}-01T00:00:00Z`)) : year;
      }

      return phrase;
    }

    const textNodes = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    for (let node = textNodes.nextNode(); node; node = textNodes.nextNode()) {
      const parent = node.parentElement;
      let separator;
      let englishSeparator;
      if (parent.closest(".authors")) {
        separator = "、";
        englishSeparator = ", ";
      } else if (parent.closest(".entry-meta")) {
        separator = "·";
        englishSeparator = " · ";
      }

      node.data = node.data.replace(/\S(?:[\s\S]*\S)?/, phrase => {
        if (separator) {
          return phrase.split(separator).map(part => translate(part.trim())).join(englishSeparator);
        }
        return translate(phrase);
      });
    }

    for (const labelledElement of document.querySelectorAll("[aria-label]")) {
      labelledElement.setAttribute("aria-label", translate(labelledElement.getAttribute("aria-label")));
    }

    document.title = translate(document.title);
    const description = document.querySelector('meta[name="description"]');
    description.content = translate(description.content);
    romanName.textContent = japaneseName;
    romanName.lang = "ja";
    document.documentElement.lang = "en";
  }
})();
