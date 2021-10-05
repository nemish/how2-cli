import inquirer from 'inquirer';
import autocomplete from 'inquirer-autocomplete-prompt';
inquirer.registerPrompt('autocomplete', autocomplete);

const OPTIONS = ['first option 1', 'second 2', 'THIRD 3'];

const orderPizza = async () => {
  // const questions = [
  //   {
  //     type: 'confirm',
  //     name: 'toBeDelivered',
  //     message: 'Is this for delivery?',
  //     default: false,
  //   },
  //   {
  //     type: 'input',
  //     name: 'phone',
  //     message: "What's your phone number?",
  //     validate(value: any) {
  //       const pass = value.match(
  //         /^([01]{1})?[-.\s]?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})\s?((?:#|ext\.?\s?|x\.?\s?){1}(?:\d+)?)?$/i,
  //       );
  //       if (pass) {
  //         return true;
  //       }

  //       return 'Please enter a valid phone number';
  //     },
  //   },
  //   {
  //     type: 'list',
  //     name: 'size',
  //     message: 'What size do you need?',
  //     choices: ['Large', 'Medium', 'Small'],
  //     filter(val: any) {
  //       return val.toLowerCase();
  //     },
  //   },
  //   {
  //     type: 'input',
  //     name: 'quantity',
  //     message: 'How many do you need?',
  //     validate(value: any) {
  //       const valid = !isNaN(parseFloat(value));
  //       return valid || 'Please enter a number';
  //     },
  //     filter: Number,
  //   },
  //   {
  //     type: 'expand',
  //     name: 'toppings',
  //     message: 'What about the toppings?',
  //     choices: [
  //       {
  //         key: 'p',
  //         name: 'Pepperoni and cheese',
  //         value: 'PepperoniCheese',
  //       },
  //       {
  //         key: 'a',
  //         name: 'All dressed',
  //         value: 'alldressed',
  //       },
  //       {
  //         key: 'w',
  //         name: 'Hawaiian',
  //         value: 'hawaiian',
  //       },
  //     ],
  //   },
  //   {
  //     type: 'rawlist',
  //     name: 'beverage',
  //     message: 'You also get a free 2L beverage',
  //     choices: ['Pepsi', '7up', 'Coke'],
  //   },
  //   {
  //     type: 'input',
  //     name: 'comments',
  //     message: 'Any comments on your purchase experience?',
  //     default: 'Nope, all good!',
  //   },
  //   {
  //     type: 'list',
  //     name: 'prize',
  //     message: 'For leaving a comment, you get a freebie',
  //     choices: ['cake', 'fries'],
  //     when(answers: any) {
  //       return answers.comments !== 'Nope, all good!';
  //     },
  //   },
  // ];

  // inquirer.prompt(questions).then((answers) => {
  //   console.log('\nOrder receipt:');
  //   console.log(JSON.stringify(answers, null, '  '));
  // });
  const answers = await inquirer.prompt([
    {
      type: 'autocomplete',
      name: 'from',
      message: 'Select a state to travel from',
      source: (answersSoFar: any, input: string) => {
        console.log('answersSOFar', { answersSoFar });
        return OPTIONS.filter((item) => item.indexOf(input) !== -1);
      },
    },
  ]);
  console.log('ansers', answers);
};

export default orderPizza;
