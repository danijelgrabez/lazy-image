import React, { Component } from 'react';
import { Image, Animated, Easing, StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  placeholderWrapper: {
    ...StyleSheet.absoluteFill,
    zIndex: 2,
  },
  placeholder: {
    width: '100%',
    height: '100%',
  },
});

class LazyImage extends Component {
  static propTypes = {
    /**
     * Image source
     */
    source: PropTypes.any,
    /**
     * Custom placeholder component
     */
    customPlaceholder: PropTypes.node,
    /**
     * Placeholder background color, if it is not provided,
     * it will fallback to `#e3e3e3`
     */
    placeholderColor: PropTypes.string,
  };

  static defaultProps = {
    customPlaceholder: null,
    placeholderColor: '#e3e3e3',
  };

  state = {
    isLoading: true,
    opacityStartValue: new Animated.Value(0),
  };

  handleLoadedImage = () => {
    const { opacityStartValue } = this.state;

    this.setState(
      {
        isLoading: false,
        opacityStartValue: new Animated.Value(0),
      },
      () => opacityStartValue.stopAnimation(),
    );
  };

  runAnimation = () => {
    const { opacityStartValue } = this.state;

    Animated.loop(
      Animated.timing(opacityStartValue, {
        toValue: 1,
        duration: 1200,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  };

  render() {
    const { source, customPlaceholder, placeholderColor, ...rest } = this.props;
    const { opacityStartValue, isLoading } = this.state;

    return (
      <Animated.View
        style={{
          position: 'relative',
          opacity: opacityStartValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [1, 0.5, 1],
          }),
        }}
      >
      {isLoading && (
          <View style={styles.placeholderWrapper}>
            {customPlaceholder ||
              <View style={[styles.placeholder, { backgroundColor: placeholderColor || '#e3e3e3' }]} />
            }
          </View>
        )}
        <Image
          source={typeof source === 'string' ? { uri: source } : source}
          onLoadStart={this.runAnimation}
          onLoadEnd={this.handleLoadedImage}
          {...rest}
        />
      </Animated.View>
    );
  }
}

export default LazyImage;
