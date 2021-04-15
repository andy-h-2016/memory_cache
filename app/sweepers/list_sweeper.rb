# class ListSweeper < ActionController::Caching::Sweeper
#   observe List
#   observe Session

#   def after_create(list)
#     expire_cache_for(list)
#   end

#   def after_create(session)
#     expire_cache_for(session)
#   end

#   def after_update(list)
#     expire_cache_for(list)
#   end

#   def after_destroy(list)
#     expire_cache_for(list)
#   end

#   def after_destroy(session)
#     expire_cache_for(session)
#   end

#   private
#   def expire_cache_for(list)
#     expire_page(controller: 'lists', action: 'index')
#   end

# end