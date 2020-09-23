module.exports = {
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true
  },
  purge: {
    layers: ['utilities'],
    content: [
      './src/**/*.vue'
    ]
  },
  theme: {
    extend: {}
  },
  variants: {},
  plugins: [],
}
