const dummyText = [
  'Croissant bear claw dragée donut shortbread cake biscuit caramels shortbread. Dragée tiramisu brownie croissant danish marshmallow powder candy canes apple pie. Pastry pie macaroon chocolate cake halvah chupa chups cotton candy jujubes jujubes. Dessert chupa chups shortbread pie donut tootsie roll powder. Halvah sweet roll shortbread chupa chups cotton candy macaroon pudding. Cookie gummi bears tart caramels halvah. Apple pie cupcake liquorice powder biscuit caramels. Gummies dragée biscuit cupcake danish jujubes wafer caramels.',
  'Sugar plum donut caramels tart gummies jelly beans. Ice cream danish toffee gummies tart jujubes marzipan. Lemon drops cheesecake gummies ice cream pudding cake. Macaroon gummies ice cream lollipop carrot cake lemon drops apple pie. Lemon drops jujubes lollipop carrot cake jelly beans gingerbread shortbread jelly beans. Gummies cotton candy chocolate cake cheesecake cupcake. Lemon drops topping chocolate muffin cheesecake. Toffee caramels jujubes tiramisu fruitcake candy lemon drops oat cake donut. Marshmallow gingerbread oat cake donut cake macaroon donut bear claw brownie. Soufflé gummi bears fruitcake shortbread cupcake.',
  'Croissant dessert sesame snaps donut jujubes tootsie roll. Marzipan muffin dragée tootsie roll bonbon toffee cake oat cake. Bear claw gingerbread tart jelly beans halvah cheesecake apple pie liquorice. Biscuit pie chocolate bar bonbon jujubes. Topping pastry dragée pie chupa chups. Tiramisu gummies icing marzipan carrot cake chupa chups toffee cake chocolate. Sweet biscuit sweet roll cake tootsie roll topping. Pastry wafer marzipan pastry chocolate carrot cake sweet. Bear claw dragée brownie gummi bears tiramisu cotton candy. Bear claw apple pie donut chupa chups muffin marshmallow danish jelly beans.',
  'Brownie oat cake donut danish pastry cotton candy shortbread wafer apple pie. Dessert chupa chups liquorice muffin halvah. Jelly-o ice cream pie gingerbread donut topping. Toffee chocolate wafer topping oat cake. Cookie cotton candy macaroon chocolate cake gummies topping. Jelly jelly sugar plum carrot cake bear claw wafer dessert cake sweet. Liquorice chocolate cake bonbon ice cream jujubes caramels brownie. Cake macaroon apple pie pudding oat cake cake. Marshmallow macaroon chocolate cake shortbread pie candy canes danish dessert danish. Tart biscuit gummi bears candy icing bonbon jelly.',
  'Topping jelly beans powder donut donut lemon drops. Croissant muffin apple pie brownie sugar plum carrot cake cake sweet roll carrot cake. Toffee lollipop apple pie ice cream dessert brownie. Lemon drops cheesecake danish gingerbread danish pudding. Chupa chups gummies cotton candy pudding bear claw jelly beans dessert. Soufflé cake tootsie roll sweet roll gingerbread candy canes bonbon biscuit. Gummies sugar plum marzipan chocolate cake tiramisu pastry toffee. Muffin cheesecake ice cream carrot cake apple pie. Lollipop jelly beans bonbon ice cream candy shortbread topping. Cotton candy apple pie candy canes sesame snaps fruitcake.',
  'Dessert liquorice candy canes oat cake powder topping tootsie roll tootsie roll sugar plum. Ice cream apple pie donut jelly-o jelly beans carrot cake tiramisu sweet. Donut jelly cookie chupa chups halvah caramels. Cupcake bear claw dessert croissant shortbread donut croissant cupcake. Chocolate bar soufflé pie lemon drops tiramisu candy cotton candy brownie. Muffin candy liquorice brownie donut chupa chups. Caramels bonbon muffin gingerbread gingerbread toffee sesame snaps powder wafer. Macaroon cotton candy candy marzipan candy canes. Candy canes biscuit lemon drops carrot cake wafer cake. Bonbon carrot cake carrot cake candy gummies cake gummies pie tootsie roll.',
  'Icing tootsie roll bear claw cake gummi bears marshmallow jujubes. Gummies sugar plum liquorice dessert cotton candy jelly-o gingerbread candy canes gummi bears. Cupcake marzipan chocolate cake jelly beans macaroon carrot cake jelly-o. Apple pie brownie jelly beans sugar plum bonbon gummies tart. Chupa chups chupa chups icing cake bonbon. Danish macaroon muffin candy canes apple pie cheesecake jujubes soufflé donut. Gummies cheesecake bear claw caramels dessert jelly beans croissant. Powder cotton candy marshmallow liquorice soufflé liquorice pie. Sweet sweet dragée carrot cake dragée candy canes jelly beans halvah pudding. Tiramisu liquorice sweet topping chupa chups powder icing sweet roll.',
  'Marshmallow shortbread chocolate bar soufflé sesame snaps pie jelly beans. Oat cake croissant cake wafer jelly bear claw jujubes. Bonbon cake halvah chupa chups icing macaroon cookie. Pudding chupa chups macaroon wafer tiramisu. Oat cake pie jelly-o ice cream donut wafer candy. Tootsie roll gingerbread lemon drops brownie cupcake cotton candy lemon drops. Donut topping danish jelly-o tiramisu topping bear claw chupa chups. Tart cheesecake soufflé jelly beans fruitcake toffee. Sweet cupcake marshmallow candy canes powder ice cream muffin fruitcake. Oat cake carrot cake chocolate bar chocolate bar dessert topping cake bear claw lemon drops.',
  'Lollipop icing marshmallow halvah muffin. Powder pudding soufflé chocolate bar tart brownie cake. Biscuit cotton candy pastry chocolate bar soufflé. Croissant powder brownie pudding donut. Brownie cake chocolate cake biscuit wafer. Toffee pastry caramels chocolate bar gingerbread sweet chocolate bar chocolate bar. Marzipan chupa chups bonbon tootsie roll wafer sugar plum bear claw chupa chups dessert. Marshmallow sugar plum gummi bears gummies pastry wafer. Icing muffin icing chocolate bar tootsie roll soufflé sesame snaps. Chocolate cake toffee caramels bonbon caramels wafer toffee.',
  'Jelly chocolate cake marzipan fruitcake chupa chups biscuit jelly-o powder cupcake. Jujubes cake chocolate candy canes pudding wafer cheesecake candy. Soufflé bonbon jelly cupcake ice cream pudding chupa chups. Sesame snaps cotton candy jelly-o fruitcake chupa chups sweet dragée cheesecake cake. Candy canes icing brownie macaroon soufflé tootsie roll tiramisu. Soufflé candy canes sweet roll candy canes liquorice.',
];

const form = document.querySelector('#form');
const amount = document.querySelector('#amount');
const result = document.querySelector('#result');
const clear = document.querySelector('#clear');

clear.addEventListener("click", load);

function load () {
    window.location.reload();
}

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const value = parseInt(amount.value);

  if (isNaN(value)) {
    alert("Pleas fillup the input fild with a numeric number");
  } else if (value <= 0) {
    alert("Please enter a number greater than 0");
  } else if (value > 10) {
      alert("Please enter a number less than 10");
  } else {
    const slicedArray = dummyText.slice(0, value);
    const finalArray = slicedArray
      .map(function (singleDummy) {
        return `<p class="paragraphs">${singleDummy}</p>`;
      })
      .join('');

    result.innerHTML = finalArray;
    result.style.padding = "25px";
  }
});