let input = [
  "Telerik Academy",
  "31 Al. Malinov, Sofia",
  "+359 888 55 55 555",
  "", // the fax number, if you are wondering
  "http://telerikacademy.com/",
  "Martin",
  "Veshev",
  "25", // wink-wink
  "+359 2 981 981",
];
let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//==============
let compName = gets();
let address = gets();
let phone = gets();
let fax = gets();
let site = gets();
let firstName = gets();
let lastName = gets();
let age = gets();
let mobile = gets();

print(compName);
print(`Address: ${address}`);
print(`Tel. ${phone}`);
print(`Fax: ${fax ? fax : "(no fax)"}`);
print(`Web site: ${site}`);
print(`Manager: ${firstName} ${lastName} (age: ${age}, tel. ${mobile})`);
