module AvgrundToHelper

  def avgrund_to(*args, &block)
    if block_given?
      options      = args.first || {}
      html_options = args.second
      modal_title  = args.third
      avgrund_to(capture(&block), options, html_options)
    else
      name         = args[0]
      options      = args[1] || {}
      html_options = args[2]


      options = url_for(options) unless options.kind_of? String

      html_options['data-avgrund-url'] = "#{options}.text"
      return link_to(name, options, html_options)
    end
  end

end
