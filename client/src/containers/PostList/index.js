import React from 'react'
import { connect } from 'react-redux';
 import { fetchAllPostsStartAsync } from '../../actions/post';
 import Container from "../../components/Container";
 import Section from "../../components/Section";
 import DownvoteButton from "../../components/DownvoteButton/DownvoteButton";
 import UpvoteButton from "../../components/UpvoteButton/UpvoteButton";
 import ShareButton from "../../components/ShareButton/ShareButton";



class PostList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      votes: 100
    };
  }

    componentDidMount() {
        console.log("Started")
        const { fetchAllPostsStartAsync } = this.props;
        fetchAllPostsStartAsync();
      }

    render () {
        return (
            <div class='posts'>
                {this.props.posts.map((post) => {
                  return (
                    <Container small>
        <Section padded>
          <h2>{post.title}</h2>
          <p >{post.text}</p>
          
          <button onClick={() => this.setState({ votes: this.state.votes + 1 })}> <UpvoteButton />{} </button>
          
          <span>{this.state.votes}</span>
          
          <button onClick={() => this.setState({ votes: this.state.votes - 1 })} ><DownvoteButton /></button>

          <ShareButton />
          {/* <CommentSection/> */}
        </Section>
      </Container>)
                })}
            </div>
        )
    }
}


const mapDispatchToProps = dispatch => ({
    fetchAllPostsStartAsync: () => dispatch(fetchAllPostsStartAsync())
  });

  const mapStateToProps = state =>({
    posts: state.post.posts
  })


  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(PostList);

