import React from 'react';
import { Container,
  UsernameTitle,
  UsernameTitleWrapper,
  Title,
  TitleWrapper,
} from './styles';
import Card from '../../components/organism/card';
import { useLocation, useNavigate } from 'react-router-dom';
import { LogoutButton } from '../../components/atoms/logoutButton';

const users = [
    {
        'username': 'Arnold Schwarzenegger',
        'gender': 'indeterminado',
        'pictures': [
            'https://cdn.ome.lt/neRSu76CVHL0ObcXyumE9wAW-LQ=/fit-in/837x500/smart/uploads/conteudo/fotos/arnold_1.jpg'
            , 'http://1.bp.blogspot.com/-4LQpBhXxUyY/T1dIgfXAr3I/AAAAAAAABgc/GZc67Pttj0Q/s280/arnold-32775_200x200.jpg'
        ],
        'likeability': '98,12%',
        'ranking': '1'
    },
    {
        'username': 'Brad Pitt',
        'gender': 'homem',
        'pictures': [
            'https://img.r7.com/images/brad-pitt-02082022184414803?dimensions=200x200&crop_position=c'
        ],
        'likeability': '92,72%',
        'ranking': '2'
    },
    {
        'username': 'Scarlett Johansson',
        'gender': 'mulher',
        'pictures': [
            'https://static1.purebreak.com.br/articles/4/42/04/@/23837-scarlett-johansson-200x200-2.jpg'
            , 'https://avatarfiles.alphacoders.com/154/thumb-154087.jpg'
            , 'https://media.vanityfair.com/photos/58dab0903753ee611fd24790/1:1/w_200,h_200,c_limit/Scarlett-Johansson.jpg'
            , 'https://i0.wp.com/whedonsworld.com/wp-content/uploads/2020/04/scarlett.jpg?fit=200%2C200&ssl=1'
        ],
        'likeability': '78,12%',
        'ranking': '3'
    },
    {
      'username': 'Arnold Schwarzenegger',
      'gender': 'indeterminado',
      'pictures': [
          'https://cdn.ome.lt/neRSu76CVHL0ObcXyumE9wAW-LQ=/fit-in/837x500/smart/uploads/conteudo/fotos/arnold_1.jpg'
          , 'http://1.bp.blogspot.com/-4LQpBhXxUyY/T1dIgfXAr3I/AAAAAAAABgc/GZc67Pttj0Q/s280/arnold-32775_200x200.jpg'
      ],
      'likeability': '98,12%',
      'ranking': '4'
    },
    {
        'username': 'Brad Pitt',
        'gender': 'homem',
        'pictures': [
            'https://img.r7.com/images/brad-pitt-02082022184414803?dimensions=200x200&crop_position=c'
        ],
        'likeability': '92,72%',
        'ranking': '5'
    },
    {
        'username': 'Scarlett Johansson',
        'gender': 'mulher',
        'pictures': [
            'https://static1.purebreak.com.br/articles/4/42/04/@/23837-scarlett-johansson-200x200-2.jpg'
            , 'https://avatarfiles.alphacoders.com/154/thumb-154087.jpg'
            , 'https://media.vanityfair.com/photos/58dab0903753ee611fd24790/1:1/w_200,h_200,c_limit/Scarlett-Johansson.jpg'
            , 'https://i0.wp.com/whedonsworld.com/wp-content/uploads/2020/04/scarlett.jpg?fit=200%2C200&ssl=1'
        ],
        'likeability': '78,12%',
        'ranking': '6'
    },
    {
      'username': 'Arnold Schwarzenegger',
      'gender': 'indeterminado',
      'pictures': [
          'https://cdn.ome.lt/neRSu76CVHL0ObcXyumE9wAW-LQ=/fit-in/837x500/smart/uploads/conteudo/fotos/arnold_1.jpg'
          , 'http://1.bp.blogspot.com/-4LQpBhXxUyY/T1dIgfXAr3I/AAAAAAAABgc/GZc67Pttj0Q/s280/arnold-32775_200x200.jpg'
      ],
      'likeability': '98,12%',
      'ranking': '7'
    },
    {
        'username': 'Brad Pitt',
        'gender': 'homem',
        'pictures': [
            'https://img.r7.com/images/brad-pitt-02082022184414803?dimensions=200x200&crop_position=c'
        ],
        'likeability': '92,72%',
        'ranking': '8'
    },
    {
        'username': 'Scarlett Johansson',
        'gender': 'mulher',
        'pictures': [
            'https://static1.purebreak.com.br/articles/4/42/04/@/23837-scarlett-johansson-200x200-2.jpg'
            , 'https://avatarfiles.alphacoders.com/154/thumb-154087.jpg'
            , 'https://media.vanityfair.com/photos/58dab0903753ee611fd24790/1:1/w_200,h_200,c_limit/Scarlett-Johansson.jpg'
            , 'https://i0.wp.com/whedonsworld.com/wp-content/uploads/2020/04/scarlett.jpg?fit=200%2C200&ssl=1'
        ],
        'likeability': '78,12%',
        'ranking': '9'
    },
    {
      'username': 'Scarlett Johansson',
      'gender': 'mulher',
      'pictures': [
          'https://static1.purebreak.com.br/articles/4/42/04/@/23837-scarlett-johansson-200x200-2.jpg'
          , 'https://avatarfiles.alphacoders.com/154/thumb-154087.jpg'
          , 'https://media.vanityfair.com/photos/58dab0903753ee611fd24790/1:1/w_200,h_200,c_limit/Scarlett-Johansson.jpg'
          , 'https://i0.wp.com/whedonsworld.com/wp-content/uploads/2020/04/scarlett.jpg?fit=200%2C200&ssl=1'
      ],
      'likeability': '78,12%',
      'ranking': '10'
  },
]

const Recommendation = () => {
  const navigate = useNavigate();
  const {state} = useLocation();

  const handleLike = () => {
    console.log('LIKE')
  }

  const handleDislike = () => {
    console.log('DISLIKE')
  }

  return (
    <Container>
      <LogoutButton/>
      <UsernameTitleWrapper>
        <UsernameTitle> Bem vindo, {state && state.first_name}</UsernameTitle>
      </UsernameTitleWrapper>
      <TitleWrapper>
        <Title> Aqui estão os melhores usuários recomendados para você:</Title>
      </TitleWrapper>
      <ul>
        {users.map((user) => 
          <Card
            recommendation
            user={user}
            handleLike={handleLike}
            handleDislike={handleDislike}
            picturesIndex={0}
          />
        )}
      </ul>
    </Container>
  );
};

export default Recommendation;