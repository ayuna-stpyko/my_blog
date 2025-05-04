function runAnonymsAsciiArt() {
  const teamInfo = {
    teamName: "Anonyms",
    university: "Keio University",
    city: "Yokohama, Kanagawa, Japan",
    members: ["Ayuna", "momoyuu", "someone_"],
  };

  const asciiArtMap = {
    A: ["      _", "     / \\", "    / _ \\    ", "   / ___ \\   ",
        " _/ /   \\ \\_ ", "|____| |____|", "             ",],
    a: ["", "", ",--.", "`'_ :", "// | |,", "'-;__/", ""],
    e: ["", "", " .---. ", "/ /__\\\\", "| \\__.,", " '.__.'", ""],
    m: ["", "", " _ .--..--.  ", "[ `.-. .-. | ", " | | | | | | ",
        "[___||__||__]", "             ",],
    n: ["", "", " _ .--.  ", "[ `.-. | ", " | | | | ", "[___||__]",
        "         "],
    o: ["", "", "  .--.  ", "/ .'`\\ \\", "| \\__. |", " '.__.' ",
        "        "],
    s: ["", "", " .--.  ", "( (`\\] ", " `'.'. ", "[\\__) )", ""],
    u: ["", "", " __   _  ", "[  | | | ", " | _/ |, ", " '.__.'_/", ""],
    y: ["", "", "  _   __ ", " [ \\ [  ]", "  \\ '/ / ", "[\\_:  /  ",
        " \\__.'   ",],
    _: ["", "", "", "", " _______", "|_______|", ""],
  };

  function generateAsciiArt(text) {
    const lines = Array(7).fill("");
    for (const char of text) for (let i = 0; i < 7; i++)
      lines[i] += asciiArtMap[char][i];
    return lines.join("\n");
  }

  const outputDiv = document.getElementById("asciiArtOutput");
  let result = generateAsciiArt(teamInfo.teamName);
  for (const member of teamInfo.members) {
    result += "\n" + generateAsciiArt(member);
  }
  outputDiv.textContent = result;
}

// ボタンにイベントリスナーを追加
document.getElementById("runAnonymsAsciiArtButton").addEventListener("click", runAnonymsAsciiArt);
