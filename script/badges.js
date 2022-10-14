let badges = () => {
    let gamemod = "Free for All"
    let players = [];

    fetch("https://raw.githubusercontent.com/LombreBlanche34/CubeShotClient/main/src/badges.json")
        .then(res => res.json())
        .then(badgeUsers => {

            switch (gamemod) {
                case "Free for All":
                    break;

                case "Team Deathmatch":
                    break;

                default:
                    break;
            }
        })
}

module.exports = badges;