CREATE TABLE `users` (
    `id_user` int PRIMARY KEY AUTO_INCREMENT,
    `mail` varchar(255) UNIQUE NOT NULL,
    `bio` longtext,
    `user_name` varchar(255) UNIQUE NOT NULL,
    `passwd` varchar(255) NOT NULL,
    `points` int NOT NULL DEFAULT 0
);

CREATE TABLE `category` (
    `cat` varchar(255) PRIMARY KEY
);

CREATE TABLE `teams` (
    `id_team` int PRIMARY KEY AUTO_INCREMENT,
    `team_name` varchar(255) UNIQUE NOT NULL,
    `event_points` int,
    `battlecry` text
);

CREATE TABLE `pr_problems` (
    `id_prob` int PRIMARY KEY AUTO_INCREMENT,
    `p_name` varchar(255) UNIQUE NOT NULL,
    `p_statement` longtext NOT NULL,
    `p_points` int NOT NULL,
    `p_date` datetime NOT NULL
);

CREATE TABLE `events` (
    `id_event` int PRIMARY KEY AUTO_INCREMENT,
    `ev_name` varchar(255) UNIQUE NOT NULL,
    `ev_date` datetime NOT NULL
);

CREATE TABLE `belongs_to` (
    `id_user` int,
    `id_team` int,
    PRIMARY KEY (`id_user`, `id_team`),
    CONSTRAINT FK_bt_user FOREIGN KEY (`id_user`) REFERENCES `users` (`id_user`),
    CONSTRAINT FK_bt_team FOREIGN KEY (`id_team`) REFERENCES `teams` (`id_team`)
);

CREATE TABLE `participates` (
    `id_team` int,
    `id_event` int,
    PRIMARY KEY (`id_team`, `id_event`),
    CONSTRAINT FK_par_team FOREIGN KEY (`id_team`) REFERENCES `teams` (`id_team`),
    CONSTRAINT FK_par_ev FOREIGN KEY (`id_event`) REFERENCES `events` (`id_event`)
);

CREATE TABLE `pr_solved` (
    `id_user` int,
    `id_prob` int,
    `time_s` timestamp NOT NULL,
    `time_millis` int NOT NULL,
    PRIMARY KEY (`id_user`, `id_prob`),
    CONSTRAINT FK_pr_s_user FOREIGN KEY (`id_user`) REFERENCES `users` (`id_user`),
    CONSTRAINT FK_pr_s_prob FOREIGN KEY (`id_prob`) REFERENCES `pr_problems` (`id_prob`)
);

CREATE TABLE `ev_solved` (
    `id_user` int,
    `id_prob` int,
    `time_s` timestamp NOT NULL,
    `time_millis` int NOT NULL,
    PRIMARY KEY (`id_user`, `id_prob`),
    CONSTRAINT FK_ev_s_user FOREIGN KEY (`id_user`) REFERENCES `users` (`id_user`),
    CONSTRAINT FK_ev_s_prob FOREIGN KEY (`id_prob`) REFERENCES `pr_problems` (`id_prob`)
);

CREATE TABLE `ev_problems` (
    `id_prob` int PRIMARY KEY AUTO_INCREMENT,
    `p_name` varchar(255) NOT NULL,
    `p_statement` longtext ,
    `p_points` int NOT NULL,
    `p_date` datetime NOT NULL,
    `id_ev` int,
    CONSTRAINT FK_ev_p FOREIGN KEY (`id_ev`) REFERENCES `events` (`id_event`)
);

CREATE TABLE `prob_pr_cat` (
    `id_prob` int,
    `cat` varchar(255),
    PRIMARY KEY (`id_prob`, `cat`),
    CONSTRAINT FK_ppc_prob FOREIGN KEY (`id_prob`) REFERENCES `pr_problems` (`id_prob`),
    CONSTRAINT FK_ppc_cat FOREIGN KEY (`cat`) REFERENCES `category` (`cat`)
);

CREATE TABLE `prob_ev_cat` (
    `id_prob` int,
    `cat` varchar(255),
    PRIMARY KEY (`id_prob`, `cat`),
    CONSTRAINT FK_pec_prob FOREIGN KEY (`id_prob`) REFERENCES `ev_problems` (`id_prob`),
    CONSTRAINT FK_pec_cat FOREIGN KEY (`cat`) REFERENCES `category` (`cat`)
);
