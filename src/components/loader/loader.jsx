import FadeLoader from 'react-spinners/FadeLoader';

export default function Loader(isLoading) {
  return (
    <FadeLoader
      color="#ffffffcc"
      cssOverride={{ display: 'block', margin: '0 auto' }}
      loading={isLoading}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
}
