import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';
import { ChatContainer } from '../src/components/ChatContainer';
import ChatBox from '../src/components/ChatBox';
import { Chat } from '../src/components/Chat';
import { PostMessageBox } from '../src/components/PostMessageBox';


describe('ChatContainer tests', () => {
  it ('ChatContainer render correctly', () => {
    const tree = renderer
      .create(<ChatContainer />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('ChatContainer render ChatBox ', () => {
    const wrapper = shallow(<ChatContainer />);
    expect(wrapper.find('ChatBox')).not.toBeNull();
  });
});


describe('ChatBox tests', () => {
  const twitchChats = [
    {
      id: 9,
      username: 'chiquita_bananna',
      twitch_sub: true,
      mod_status: true
    },
    {
      id: 502,
      username: 'A_Seagull',
      twitch_sub: true,
      mod_status: true
    },
  ];

  test('ChatBox render correctly', () => {
    const component = renderer.create(<ChatBox chatsArray={twitchChats}/>);
    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('ChatBox should render a Chat component for each chatObject passed to it', () => {
    const wrapper = mount(<ChatBox chatsArray={twitchChats}/>);
    expect(wrapper.find(Chat)).toHaveLength(2);
  });
});

describe('Chat tests', () => {
  const user1 = {
    id: 9,
    username: 'chiquita_bananna',
    twitch_sub: true,
    mod_status: true
  };

  const user2 = {
    id: 503,
    username: 't3nwinter',
    twitch_sub: true,
    mod_status: false,
  };

  const user3 = {
    id: 484,
    username: 'realmgamingg',
    twitch_sub: false,
    mod_status: false,
  };

  test('Chat render correctly', () => {
    const component = renderer.create(<Chat chat={user1}/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Chat should render appropriate mod or sub icons per user\'s mod and sub status', () => {
    const modAndSubWrapper = shallow(<Chat chat={user1} />);
    const onlySubWrapper = shallow(<Chat chat={user2} />);
    const normalUserWrapper = shallow(<Chat chat={user3} />);

    expect(modAndSubWrapper.find('.mod').length && modAndSubWrapper.find('.sub').length).toBe(1);
    expect(onlySubWrapper.find('.sub').length).toBe(1);
    expect(onlySubWrapper.find('.mod').length).toBe(0);
    expect(normalUserWrapper.find('.mod').length && normalUserWrapper.find('.sub').length).toBe(0);
  });
});

describe('PostMessageBox tests', () => {
  it('PostMessageBox render correctly', () => {
    const tree = renderer
      .create(<PostMessageBox />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});




