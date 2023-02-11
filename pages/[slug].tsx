import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import tw from 'twin.macro';

let SlugPage: NextPage = () => {
  let { query } = useRouter();

  return (
    <div>
      <h1 css={[tw`p-0 m-0`]}>{query.slug}</h1>
    </div>
  );
};

export default SlugPage;
