import { Feast } from "../types";

export const makeFeast = (
  title: string,
  rank: Feast["rank"],
  subtitle?: string,
) => {
  const feast: Feast = { title, rank };
  if (subtitle) {
    feast.subtitle = subtitle;
  }
  return feast;
};

export const FIXED_FEASTS = [
  ["3 Dec", makeFeast("Saint Francis Xavier", "memorial", "Priest")],
  [
    "4 Dec",
    makeFeast(
      "Saint John Damascene",
      "optionalMemorial",
      "Priest and Doctor of the Church",
    ),
  ],
  ["6 Dec", makeFeast("Saint Nicholas", "optionalMemorial", "Bishop")],
  [
    "7 Dec",
    makeFeast("Saint Ambrose", "memorial", "Bishop and Doctor of the Church"),
  ],
  [
    "8 Dec",
    makeFeast(
      "The Immaculate Conception of the Blessed Virgin Mary",
      "solemnity",
    ),
  ],
  ["9 Dec", makeFeast("Saint Juan Diego Cuahtlaotoaztin", "optionalMemorial")],
  ["11 Dec", makeFeast("Saint Damasus I", "optionalMemorial", "Pope")],
  ["12 Dec", makeFeast("Our Lady of Guadalupe", "feast")],
  ["13 Dec", makeFeast("Saint Lucy", "memorial", "Virgin and Martyr")],
  [
    "14 Dec",
    makeFeast(
      "Saint John of the Cross",
      "memorial",
      "Priest and Doctor of the Church",
    ),
  ],
  [
    "21 Dec",
    makeFeast(
      "Saint Peter Canisius",
      "optionalMemorial",
      "Priest and Doctor of the Church",
    ),
  ],
  ["23 Dec", makeFeast("Saint John Kanty", "optionalMemorial", "Priest")],
  ["25 Dec", makeFeast("The Nativity of the Lord", "solemnity")],
  ["26 Dec", makeFeast("Saint Stephen", "feast", "The First Martyr")],
  ["27 Dec", makeFeast("Saint John", "feast", "Apostle and Evangelist")],
  ["28 Dec", makeFeast("The Holy Innocents", "feast", "Martyrs")],
  [
    "29 Dec",
    makeFeast("Saint Thomas Becket", "optionalMemorial", "Bishop and Martyr"),
  ],
  [
    "31 Dec",
    makeFeast("The Holy Family of Jesus, Mary, and Joseph", "feastOfTheLord"),
  ],
  ["1 Jan", makeFeast("Mary, the Holy Mother of God", "solemnity")],
  [
    "2 Jan",
    makeFeast(
      "Saint Basil the Great and Saint Gregory Nazianzen",
      "memorial",
      "Bishops and Doctors of the Church",
    ),
  ],
  ["3 Jan", makeFeast("The Most Holy Name of Jesus", "optionalMemorial")],
  [
    "7 Jan",
    makeFeast("Saint Raymond of Penyafort", "optionalMemorial", "Priest"),
  ],
  [
    "13 Jan",
    makeFeast("Saint Hilary", "memorial", "Bishop and Doctor of the Church"),
  ],
  ["17 Jan", makeFeast("Saint Anthony", "memorial", "Abbot")],
  ["20 Jan", makeFeast("Saint Fabian", "memorial", "Pope and Martyr")],
  ["20 Jan", makeFeast("Saint Sebastian", "optionalMemorial", "Martyr")],
  [
    "24 Jan",
    makeFeast(
      "Saint Francis de Sales",
      "memorial",
      "Bishop and Doctor of the Church",
    ),
  ],
  ["25 Jan", makeFeast("The Conversion of Saint Paul, Apostle", "feast")],
  ["26 Jan", makeFeast("Saints Timothy and Titus", "memorial", "Bishops")],
  ["27 Jan", makeFeast("Saint Angela Merici", "optionalMemorial", "Virgin")],
  ["31 Jan", makeFeast("Saint John Bosco", "memorial", "Priest")],
  ["2 Feb", makeFeast("The Presentation of the Lord", "feastOfTheLord")],
  ["3 Feb", makeFeast("Saint Blaise", "optionalMemorial", "Bishop and Martyr")],
  ["3 Feb", makeFeast("Saint Ansgar", "optionalMemorial", "Bishop")],
  ["5 Feb", makeFeast("Saint Agatha", "memorial", "Virgin and Martyr")],
  ["6 Feb", makeFeast("Saint Paul Miki and Companions", "memorial", "Martyrs")],
  ["8 Feb", makeFeast("Saint Josephine Bakhita", "optionalMemorial", "Virgin")],
  ["8 Feb", makeFeast("Saint Jerome Emiliani", "optionalMemorial", "Priest")],
  ["10 Feb", makeFeast("Saint Scholastica", "memorial", "Virgin")],
  [
    "17 Feb",
    makeFeast("The Seven Founders of the Servite Order", "optionalMemorial"),
  ],
  [
    "21 Feb",
    makeFeast(
      "Saint Peter Damian",
      "memorial",
      "Bishop and Doctor of the Church",
    ),
  ],
  ["23 Feb", makeFeast("Saint Polycarp", "memorial", "Bishop and Martyr")],
  [
    "27 Feb",
    makeFeast(
      "Sain Gregory of Narek",
      "optionalMemorial",
      "Abbot and Doctor of the Church",
    ),
  ],
  ["4 Mar", makeFeast("Saint Casimir", "optionalMemorial", "Prince of Poland")],
  ["7 Mar", makeFeast("Saints Perpetua and Felicity", "memorial", "Martyrs")],
  ["8 Mar", makeFeast("Saint John of God", "memorial", "Religious")],
  [
    "18 Mar",
    makeFeast(
      "Saint Cyril of Jerusalem",
      "optionalMemorial",
      "Bishop and Doctor of the Church",
    ),
  ],
  [
    "19 Mar",
    makeFeast("Saint Joseph, Spouse of the Blessed Virgin Mary", "solemnity"),
  ],
  [
    "23 Mar",
    makeFeast("Saint Turibius of Mogrovejo", "optionalMemorial", "Bishop"),
  ],
  ["8 Apr", makeFeast("The Annunciation of the Lord", "solemnity")],
  ["11 Apr", makeFeast("Saint Stanislaus", "memorial", "Bishop and Martyr")],
  [
    "13 Apr",
    makeFeast("Saint Martin I", "optionalMemorial", "Pope and Martyr"),
  ],
  ["23 Apr", makeFeast("Saint George", "optionalMemorial", "Martyr")],
  [
    "23 Apr",
    makeFeast("Saint Adalbert", "optionalMemorial", "Bishop and Martyr"),
  ],
  [
    "24 Apr",
    makeFeast(
      "Saint Fidelis of Sigmaringen",
      "optionalMemorial",
      "Priest and Martyr",
    ),
  ],
  ["30 Apr", makeFeast("Saint Pius V", "memorial", "Pope")],
  ["1 May", makeFeast("Saint Joseph the Worker", "memorial")],
  [
    "2 May",
    makeFeast(
      "Saint Athanasius",
      "memorial",
      "Bishop and Doctor of the Church",
    ),
  ],
  ["3 May", makeFeast("Saints Philip and James", "feast", "Apostles")],
  [
    "10 May",
    makeFeast(
      "John of Avila",
      "optionalMemorial",
      "Priest amd Doctor of the Church",
    ),
  ],
  ["13 May", makeFeast("Our Lady of Fatima", "optionalMemorial")],
  ["14 May", makeFeast("Saint Matthias", "feast", "Apostle")],
  ["18 May", makeFeast("Saint John I", "optionalMemorial", "Pope and Martyr")],
  [
    "20 May",
    makeFeast("The Blessed Virgin Mary, Mother of the Church", "memorial"),
  ],
  [
    "21 May",
    makeFeast(
      "Saint Christopher Magallanes and Companions",
      "memorial",
      "Martyrs",
    ),
  ],
  [
    "22 May",
    makeFeast("Saint Rita of Cascia", "optionalMemorial", "Religious"),
  ],
  [
    "25 May",
    makeFeast(
      "Saint Bede the Venerable",
      "memorial",
      "Priest and Doctor of the Church",
    ),
  ],
  ["25 May", makeFeast("Saint Gregory VII", "optionalMemorial", "Pope")],
  [
    "25 May",
    makeFeast("Saint Mary Magdalene de Pazzi", "optionalMemorial", "Virgin"),
  ],
  ["27 May", makeFeast("Saint Augustine of Canterbury", "memorial", "Bishop")],
  ["29 May", makeFeast("Saint Paul VI", "memorial", "Pope")],
  ["31 May", makeFeast("The Visitation of the Blessed Virgin Mary", "feast")],
  ["1 Jun", makeFeast("Saint Justin", "memorial", "Martyr")],
  [
    "3 Jun",
    makeFeast("Saint Charles Lwanga and Companions", "memorial", "Martyrs"),
  ],
  ["5 Jun", makeFeast("Saint Boniface", "memorial", "Bishop and Martyr")],
  [
    "8 Jun",
    makeFeast("The Immaculate Heart of the Blessed Virgin Mary", "memorial"),
  ],
  ["11 Jun", makeFeast("Saint Barnabas", "feast", "Apostle")],
  [
    "13 Jun",
    makeFeast(
      "Saint Anthony of Padua",
      "memorial",
      "Priest and Doctor of the Church",
    ),
  ],
  ["19 Jun", makeFeast("Saint Romuald", "optionalMemorial", "Abbot")],
  ["21 Jun", makeFeast("Saint Aloysius Gonzaga", "memorial", "Religious")],
  ["22 Jun", makeFeast("Saint Paulinus of Nola", "optionalMemorial", "Bishop")],
  [
    "22 Jun",
    makeFeast(
      "Saint John Fisher and Saint Thomas More",
      "optionalMemorial",
      "Bishops and Martyrs",
    ),
  ],
  ["24 Jun", makeFeast("The Nativity of Saint John the Baptist", "solemnity")],
  [
    "27 Jun",
    makeFeast(
      "Saint Cyril of Alexandria",
      "optionalMemorial",
      "Bishop and Doctor of the Church",
    ),
  ],
  ["29 Jun", makeFeast("Saints Peter and Paul", "solemnity", "Apostles")],
  ["3 Jul", makeFeast("Saint Thomas", "feast", "Apostle")],
  ["5 Jul", makeFeast("Saint Anthony Zaccaria", "optionalMemorial", "Priest")],
  [
    "6 Jul",
    makeFeast("Saint Maria Goretti", "optionalMemorial", "Virgin and Martyr"),
  ],
  [
    "9 Jul",
    makeFeast(
      "Saint Augustine Zhao Rong and Companions",
      "memorial",
      "Martyrs",
    ),
  ],
  ["11 Jul", makeFeast("Saint Benedict", "memorial", "Abbot")],
  [
    "13 Jul",
    makeFeast("Saint Henry", "optionalMemorial", "Holy Roman Emperor"),
  ],
  [
    "15 Jul",
    makeFeast(
      "Saint Bonaventure",
      "memorial",
      "Bishop and Doctor of the Church",
    ),
  ],
  ["16 Jul", makeFeast("Our Lady of Mount Carmel", "feast")],
  [
    "20 Jul",
    makeFeast("Saint Apollinaris", "optionalMemorial", "Bishop and Martyr"),
  ],
  ["22 Jul", makeFeast("Saint Mary Magdalene", "feast")],
  [
    "23 Jul",
    makeFeast("Saint Bridget of Sweden", "optionalMemorial", "Religious"),
  ],
  ["24 Jul", makeFeast("Saint Sharbel Makhluf", "optionalMemorial", "Priest")],
  ["29 Jul", makeFeast("Saint Martha, Mary, and Lazarus", "memorial")],
  [
    "30 Jul",
    makeFeast(
      "Saint Peter Chrysologus",
      "memorial",
      "Bishop and Doctor of the Church",
    ),
  ],
  ["31 Jul", makeFeast("Saint Ignatius of Loyola", "memorial", "Priest")],
  [
    "1 Aug",
    makeFeast(
      "Saint Alphonsus Liguori",
      "memorial",
      "Bishop and Doctor of the Church",
    ),
  ],
  [
    "2 Aug",
    makeFeast("Saint Eusebius of Vercelli", "optionalMemorial", "Bishop"),
  ],
  [
    "2 Aug",
    makeFeast("Saint Peter Julian Eymard", "optionalMemorial", "Priest"),
  ],
  [
    "5 Aug",
    makeFeast("Dedication of the Basilica of Saint Mary Major", "memorial"),
  ],
  ["6 Aug", makeFeast("The Transfiguration of the Lord", "feastOfTheLord")],
  [
    "7 Aug",
    makeFeast(
      "Saint Sixtus II and Companions",
      "optionalMemorial",
      "Pope and Martyrs",
    ),
  ],
  ["8 Aug", makeFeast("Saint Dominic", "memorial", "Priest")],
  [
    "9 Aug",
    makeFeast(
      "Saint Teresa Benedicta of the Cross",
      "memorial",
      "Virgin and Martyr",
    ),
  ],
  ["10 Aug", makeFeast("Saint Lawrence", "feast", "Deacon and Martyr")],
  [
    "12 Aug",
    makeFeast("Saint Jane Frances de Chantal", "optionalMemorial", "Religious"),
  ],
  [
    "13 Aug",
    makeFeast(
      "Saints Pontian and Hippolytus",
      "optionalMemorial",
      "Popes and Martyrs",
    ),
  ],
  [
    "14 Aug",
    makeFeast("Saint Maximilian Kolbe", "memorial", "Priest and Martyr"),
  ],
  [
    "15 Aug",
    makeFeast("The Assumption of the Blessed Virgin Mary", "solemnity"),
  ],
  ["16 Aug", makeFeast("Saint Stephen of Hungary", "optionalMemorial", "King")],
  ["19 Aug", makeFeast("Saint John Eudes", "optionalMemorial", "Priest")],
  [
    "20 Aug",
    makeFeast("Saint Bernard", "memorial", "Abbot and Doctor of the Church"),
  ],
  ["21 Aug", makeFeast("Saint Pius X", "memorial", "Pope")],
  ["22 Aug", makeFeast("The Queenship of the Blessed Virgin Mary", "memorial")],
  ["23 Aug", makeFeast("Saint Rose of Lima", "optionalMemorial", "Virgin")],
  ["24 Aug", makeFeast("Saint Bartholomew", "feast", "Apostle")],
  [
    "27 Aug",
    makeFeast("Saint Monica", "memorial", "Mother of Saint Augustine"),
  ],
  [
    "28 Aug",
    makeFeast("Saint Augustine", "memorial", "Bishop and Doctor of the Church"),
  ],
  ["29 Aug", makeFeast("The Passion of Saint John the Baptist", "memorial")],
  [
    "3 Sep",
    makeFeast(
      "Saint Gregory the Great",
      "memorial",
      "Pope and Doctor of the Church",
    ),
  ],
  [
    "13 Sep",
    makeFeast(
      "Saint John Chrysostom",
      "memorial",
      "Bishop and Doctor of the Church",
    ),
  ],
  ["14 Sep", makeFeast("The Exaltation of the Holy Cross", "feast")],
  [
    "16 Sep",
    makeFeast("Saints Cornelius and Cyprian", "memorial", "Popes and Martyrs"),
  ],
  [
    "17 Sep",
    makeFeast(
      "Saint Robert Bellarmine",
      "memorial",
      "Bishop and Doctor of the Church",
    ),
  ],
  [
    "17 Sep",
    makeFeast(
      "Saint Hildegard of Bingen",
      "optionalMemorial",
      "Virgin and Doctor of the Church",
    ),
  ],
  ["19 Sep", makeFeast("Saint Januarius", "memorial", "Bishop and Martyr")],
  [
    "20 Sep",
    makeFeast("Saint Andrew Kim Taegon and Companions", "memorial", "Martyrs"),
  ],
  ["21 Sep", makeFeast("Saint Matthew", "feast", "Apostle and Evangelist")],
  ["23 Sep", makeFeast("Saint Pius of Pietrelcina", "memorial", "Priest")],
  ["26 Sep", makeFeast("Saints Cosmas and Damian", "memorial", "Martyrs")],
  ["28 Sep", makeFeast("Saint Wenceslaus", "memorial", "Martyr")],
  [
    "28 Sep",
    makeFeast("Saint Lawrence Ruiz and Companions", "memorial", "Martyrs"),
  ],
  [
    "30 Sep",
    makeFeast("Saint Jerome", "memorial", "Priest and Doctor of the Church"),
  ],
  [
    "1 Oct",
    makeFeast(
      "Saint Therese of the Child Jesus",
      "memorial",
      "Virgin and Doctor of the Church",
    ),
  ],
  ["2 Oct", makeFeast("The Holy Guardian Angels", "memorial")],
  ["4 Oct", makeFeast("Saint Francis of Assisi", "memorial", "Religious")],
  ["5 Oct", makeFeast("Saint Faustina Kowalska", "optionalMemorial", "Virgin")],
  ["7 Oct", makeFeast("Our Lady of the Rosary", "memorial")],
  [
    "9 Oct",
    makeFeast(
      "Saint Denis and Companions",
      "optionalMemorial",
      "Bishop and Martyrs",
    ),
  ],
  ["9 Oct", makeFeast("Saint John Leonardi", "optionalMemorial", "Priest")],
  ["11 Oct", makeFeast("Saint John XXIII", "optionalMemorial", "Pope")],
  [
    "14 Oct",
    makeFeast("Saint Callistus I", "optionalMemorial", "Pope and Martyr"),
  ],
  [
    "15 Oct",
    makeFeast(
      "Saint Teresa of Jesus",
      "memorial",
      "Virgin and Doctor of the Church",
    ),
  ],
  ["16 Oct", makeFeast("Saint Hedwig", "optionalMemorial", "Religious")],
  [
    "16 Oct",
    makeFeast("Saint Margaret Mary Alacoque", "optionalMemorial", "Virgin"),
  ],
  [
    "17 Oct",
    makeFeast("Saint Ignatius of Antioch", "memorial", "Bishop and Martyr"),
  ],
  ["18 Oct", makeFeast("Saint Luke", "feast", "Evangelist")],
  ["22 Oct", makeFeast("Saint John Paul II", "memorial", "Pope")],
  [
    "23 Oct",
    makeFeast("Saint John of Capistrano", "optionalMemorial", "Priest"),
  ],
  ["24 Oct", makeFeast("Saint Anthony Mary Claret", "memorial", "Bishop")],
  ["28 Oct", makeFeast("Saints Simon and Jude", "feast", "Apostles")],
  ["1 Nov", makeFeast("All Saints", "solemnity")],
  ["2 Nov", makeFeast("All Souls", "feast")],
  ["4 Nov", makeFeast("Saint Charles Borromeo", "memorial", "Bishop")],
  [
    "9 Nov",
    makeFeast("The Dedication of the Lateran Basilica", "feastOfTheLord"),
  ],
  ["11 Nov", makeFeast("Saint Martin of Tours", "memorial", "Bishop")],
  ["12 Nov", makeFeast("Saint Josaphat", "memorial", "Bishop and Martyr")],
  [
    "15 Nov",
    makeFeast(
      "Saint Albert the Great",
      "memorial",
      "Bishop and Doctor of the Church",
    ),
  ],
  [
    "16 Nov",
    makeFeast("Saint Margaret of Scotland", "optionalMemorial", "Queen"),
  ],
  [
    "16 Nov",
    makeFeast("Saint Gertrude the Great", "optionalMemorial", "Virgin"),
  ],
  [
    "18 Nov",
    makeFeast(
      "Dedication of the Basilicas of Saints Peter and Paul",
      "optionalMemorial",
    ),
  ],
  [
    "21 Nov",
    makeFeast("The Presentation of the Blessed Virgin Mary", "memorial"),
  ],
  ["22 Nov", makeFeast("Saint Cecilia", "memorial", "Virgin and Martyr")],
  [
    "23 Nov",
    makeFeast("Saint Clement I", "optionalMemorial", "Pope and Martyr"),
  ],
  ["23 Nov", makeFeast("Saint Columban", "optionalMemorial", "Abbot")],
  ["30 Nov", makeFeast("Saint Andrew", "feast", "Apostle")],
].reduce((acc, [date, feast]: [string, Feast]) => {
  if (!acc[date]) {
    acc[date] = [];
  }
  acc[date].push(feast);
  return acc;
}, {});
