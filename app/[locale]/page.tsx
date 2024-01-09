import DragAndDrop from '@/components/DragAndDrop';

async function Home() {

  return (
    // make that main fill the whole page
      <main className="flex items-center justify-center h-screen">
        <DragAndDrop />
      </main>
  );
}

export default Home;
