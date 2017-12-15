import React, {
  Component
} from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  Image,
  Platform,
  StatusBar,
  StyleSheet,
} from 'react-native'
import NavigationBar from 'react-native-navbar'

module.exports = ComponentWithNavigationBar

const defaultRB = {
  title: 'Next',
  handler: () => alert('hello!'),
}
const defaultLB = {
  title: 'Next',
  handler: () => alert('hello!'),
}
const defaultTitle = {
  title: 'Hello, world',
}

function ComponentWithNavigationBar (titleConfig = defaultTitle,
                                     leftButtonConfig = null,
                                     rightButtonConfig = null) {
  return (
    <View style={styles.container}>
      <View style={{height:Platform.OS === 'ios' ? 5 : 15}}></View>
      <NavigationBar
        tintColor='#2196F3'
        statusBar={{
          style: 'light-content',
          tintColor: '#2196F3',
        }}
        title={titleConfig}
        leftButton={leftButtonConfig}
        rightButton={rightButtonConfig}
      />
    </View>
  )
}

const NAV_BAR_HEIGHT_ANDROID = 50
const NAV_BAR_HEIGHT_IOS = 44
const STATUS_BAR_HEIGHT = 20
const StatusBarShape = {
  backgroundColor: PropTypes.string,
  barStyle: PropTypes.oneOf(['default', 'light-content', 'dark-content']),
  hidden: PropTypes.bool,
}

class NavigatorBar2 extends Component {
  static propTypes = {
    style: View.propTypes.style,
    title: PropTypes.string,
    titleView: PropTypes.element,
    hide: PropTypes.bool,
    leftButton: PropTypes.element,
    rightButton: PropTypes.element,
    statusBar: PropTypes.shape(StatusBarShape),
  }

  static defaultProps = {
    statusBar: {
      barStyle: 'light-content',
      hidden: false,
    },
  }

  constructor (props, defaultProps) {
    super(props, defaultProps)
    this.state = {
      title: '',
      hide: false,
    }
  }

  render () {
    console.log(this.props)
    let status =
      <View style={styles.statusBar}>
        <StatusBar {...this.props.statusBar} barStyle='light-content'/>
      </View>
    let titleView = this.props.titleView ? this.props.titleView : <Text style={styles.title}>{this.props.title}</Text>
    let content =
      <View style={styles.navBar}>
        {this.props.leftButton}
        <View style={styles.titleViewContainer}>
          {titleView}
        </View>
        {this.props.rightButton}
      </View>
    return (
      <View style={[styles.container, this.props.style]}>
        {status}
        {content}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2196F3'
  },
  navBar: {
    justifyContent: 'space-between',
    alignItems: 'center',
    height: Platform.OS === 'ios' ? NAV_BAR_HEIGHT_IOS : NAV_BAR_HEIGHT_ANDROID,
    backgroundColor: '#2196F3',
    flexDirection: 'row',
  },
  titleViewContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 40,
    right: 40,
    top: 0,
    bottom: 0,
  },
  title: {
    fontSize: 20,
    color: 'white'
  }
})

