export const apiUrl = "https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=EN&amount=10";

export const apiStatusConstants = {
  initial: "INITIAL",
  success: "SUCCESS",
  failure: "FAILURE",
  inProgress: "IN_PROGRESS",
};

export const formErrorMessages = {
  userErr: "*username must be 5to10 characters and only alphabets are allowed",
  pwdErr:
    "*password must be 8to15 characters and must include atleast one digit ,one letter,and one special character from these !,@,#,$,%",
  emptyErr: "*Required",
};

export const diffColors = [
  "text-primary",
  "text-secondary",
  "text-success",
  "text-danger",
  "text-warning",
  "text-info",
  "text-dark",
];

export const diffBgColors = [
  "bg-primary",
  "bg-secondary",
  "bg-success",
  "bg-danger",
  "bg-warning",
  "bg-info",
  "bg-dark",
  "bg-transparent",
];

export const bgImag =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxANDw0NDQ0NDQ0NDQ0NDQ0NDQ8NDg0NFREWFhURFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFQ8PFSsZFRkrKysrKy0rLSsrKy03KysuKys3NysrLS0yLTg3Kys3LSsrLSsrKy0rKy0tKysrKysrK//AABEIALEBHAMBIgACEQEDEQH/xAAaAAEBAQEBAQEAAAAAAAAAAAAAAQIEAwUG/8QAMhABAQACAAQEAwYFBQAAAAAAAAECEQMhMUEEElFxYYHhMkJykaGxEyJSwdEUYrLw8f/EABoBAAMBAQEBAAAAAAAAAAAAAAABAgMFBAb/xAAfEQEBAQEAAQUBAQAAAAAAAAAAAQIRMQMSIUFRYRT/2gAMAwEAAhEDEQA/APzKA6b7PVSjXkure0YpsLe9KlQJGqlSlrOVJlamTNpahxjrXQA0AGwOis7D4i6iptA5lnr1eGyiNJiR5t+raAi2FoCHGdogLkRdBQyxs5VTK6QFNnRR7cLgXLryn7ml54zfKc/Z7Y+Gve6dGOMx6TRaOhicLGdt+7WoGyDSA5z7zVel6zWWNmPLree+ry4k1eV3OyIOsZnnz0ZtWs3LRI1rhaxldpldocYa2AGjoCHxF0u0A+It6ICpGetcARpJx5taAQ2doCHGdoiouRFoD0+x+Pp+CenupjrR9j8f6YfV5KQ2ZFHV4bg/ey+Rg4PA75fKPdWbSItQXGTnvck187ewFrNRcprnOl6fD1jAD0mUveG3Ls37ue+w/wBH8dG2bnHjsHE69b8bubO0BxlddANmi0BcceW707euV9IfEa1xNJVyyt/tJ2+CGU6IqU5E61yAI0kebWgENlaAlNnaIC5EWh/4NY5a3qfzdJf6YplrTX2Px/8AD4e7yUNkRSNY47up35GHp4fh+a77T9a7Kzhj5ZIWkRagmwDZMu15y65ezNqbA4ueW+2pOkY2Ws32v5GGQHPfSIuhNgKgGOgN4zlu9O3+76BNvCY8t5dPTvlfSMZZb6/l6Rcst/trtNIaZP0RU2cnS1rgCNJOPNrXQENnaAh8Z2hUFyItARTO0ANleqopkSPfwuPPzfKPF18PHUk+YDdQSkQlpVkBW8ZmPryamKgBIpFAcegR4X0oACAAFnXn0M8t39JO0noiK4i881SoHIz1sBGjG0BAztAQ+M7RNgqJ8i6JFOJsTSwVSaKBkaPKqmmsyOxzTrPd0UkWFZtLWQl6YxQCRRQYCgOJFR4X0tVAp8TbAEORndAC5GdoCGzugENnaAhs7QTbRpSNzh97ZjvpvfNjT080sky80slm53lVIjVv0zcbOV6o3xMt3etTtPSMqLoqKZCo0ZJpRQVo9tvFvG8gitVm0tZtCXQrPCu5+jZEAoACgOBUHifR2vSbmM8s6782pu79E4s535b9N65sS31RTHxQBUibQENnaAhs7QEORnaVCiuItVYkU5BfgUFJtBQ0io1DI0CgqAoRaRRMgRazaWs2gnt4bLnZ68/m6HDw8tZS/Hm7yooCggABwAjxyO9aALkRaAhs7oBDZ2gIcjO0qGxciLoWRK1FJlFACigaRYEMlBQQChHRRu46nPrecnf3oKsM8S8m3lnlsEzayVLQFx6z3n7vpuHwvD3lvtj+7uIUBQSKAD5wDzSO3aAlNnaLjju6nXV+U9SY23Un59Pdbly8svLfO98r/j4GxujPKdMene3730YEUnxBFRUiLQEUytXGNs4NQKl+BWseHb0lemPh73shpunironh53tvtyX+Fj6DqfdHOOnyT0iWT0n5Avc8B7a+H6J5b6BPueZt6fw78G5wdc7Z5usnafGgvc85ZjzvO9sfT41i5/W+tel4O+dvXr6n+n+NMRz5ZM11Tw09a1PD4+l+dA64a9eF4fLLryjsx4cnTGRsi6zhhMZqfVoUAAAACN84EYOtqi4423l7+09b8Eayut4zp96/1U2OtX6M8pry49L9q/1fRg2ikiAqRF0AimV0LMbeUm69+D4W5c8v5Z6d67cMJjyxmv3Nla5OF4S9crr26unHhY49J87zraWkO0rNrN4noxfzNPWrmm77Ipl00sCACiwBrGeXn97tP71P+2+oEIAoMBQAAAUWACLUIwAB80EYulaAlNmJQXIi0BeHhcrqfNTK1MMbldSbvZ38Dwsx53+bL9I9ODwphOXXve7dDK3og8+JxO0CWs89f4eOWW0FScTb0UUAUABQBikUjAUABQAAAUABUCNUAAtZ2WoA4EBk6FKlA0oAuMqjs8B0y9gNlp2VADNMujmUOeU6RQUmCgRqAAqwApYAQUABQACKABACAADEqgDAAD//2Q==";

export const headLogo =
  "https://res.cloudinary.com/djdbb0sfe/image/upload/v1686641662/face-with-stuck-out-tongue-and-winking-eye-img_g8ajxh.png";