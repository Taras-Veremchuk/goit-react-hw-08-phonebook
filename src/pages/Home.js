// import { useSelector } from 'react-redux';
// import { selectIsLoggedIn } from 'redux/auth/selectors';

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

export default function Home() {
  // const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>It's your personal phonebook</h1>
    </div>
  );
}
