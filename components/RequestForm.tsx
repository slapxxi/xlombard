import TextField from '@mui/material/TextField';
import classNames from 'classnames';
import { SubmitHandler, useForm } from 'react-hook-form';
import useMediaQuery from '../lib/hooks/useMediaQuery';
import { mdQuery } from '../lib/styles/mq';
import { Button } from './Button';
import { CardContainer } from './Card';
import { ResponsiveText } from './ResponsiveText';
import { Title } from './Title';

export type RequestFormProps = {
  children?: React.ReactNode;
  className?: string;
};

type Inputs = {
  name?: string;
  phoneNumber?: string;
  email: string;
  question: string;
};

export let RequestForm = (props: RequestFormProps) => {
  let { children, className = '', ...rest } = props;
  let md = useMediaQuery(mdQuery);
  let form = useForm<Inputs>({});

  let handleSubmit: SubmitHandler<Inputs> = () => {
    console.warn('not implemented: `handleSubmit`');
  };

  return (
    <CardContainer className={classNames(className)} {...rest}>
      <form action="" className="flex flex-col px-8 py-6" onSubmit={form.handleSubmit(handleSubmit)}>
        <Title size={md ? '2xl' : 'md'} className="mb-2.5">
          Ответим на любые вопросы: <br /> <em>расскажем, покажем и дадим попробовать</em>
        </Title>
        <ResponsiveText className="mb-2 md:mb-4">Проведём онлайн демонстрацию по Zoom!</ResponsiveText>
        <div className="my-4 flex flex-col gap-2 md:gap-4">
          <TextField label="Как к вам обращаться (ваше имя)" variant="outlined" {...form.register('name')} />
          <TextField
            label="Телефон, чтобы мы могли перезвонить"
            variant="outlined"
            {...form.register('phoneNumber')}
          />
          <TextField
            label="Электронная почта для отправки ответа"
            variant="outlined"
            error={!!form.formState.errors.email}
            helperText="Обязательное поле"
            {...form.register('email', { required: true })}
          />
          <TextField
            label="Ваш вопрос"
            variant="outlined"
            error={!!form.formState.errors.question}
            helperText="Обязательное поле"
            {...form.register('question', { required: true })}
          />
        </div>
        <Button variant="fill" radius="md" className="mt-3" type="submit" center>
          Отправить сообщение
        </Button>
      </form>
    </CardContainer>
  );
};
