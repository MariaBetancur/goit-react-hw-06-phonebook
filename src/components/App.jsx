import ContactForm from './ContactForm';
import SearchFilter from './SearchFilter';
import ContactList from './ContactList';
import '../App.css';

const App = () => {
  return (
    <div className="phonebox">
      <h1>Phonebook ☎</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <SearchFilter />
      <ContactList />
    </div>
  );
};

export default App;
// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
